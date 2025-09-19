import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import z from 'zod';
import { PrismaClient } from '@prisma/client';
import { OAuth2Client } from 'google-auth-library';

const router = Router();

const prisma = new PrismaClient();


const JWT_SECRET = process.env.JWT_SECRET!;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

router.post('/signin', async (req, res) => {

  const body = req.body;
  const validation = signinSchema.safeParse(body);
  if (!validation.success) {
    return res.status(400).json({ message: "Invalid input format" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user || !user.password) {
      return res.status(403).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An internal server error occurred." });
  }
});

const googleTokenSchema = z.object({
  token: z.string(),
});

router.post('/google', async (req, res) => {
  const body = req.body;
  const validation = googleTokenSchema.safeParse(body);

  if (!validation.success) {
    return res.status(400).json({ message: "Invalid token format" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: body.token,
      audience: GOOGLE_CLIENT_ID,
    });

    if (!ticket) {
      return res.status(401).json({ message: "Invalid Google token" });
    }

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      return res.status(401).json({ message: "Invalid Google token payload" });
    }

    const user = await prisma.user.upsert({
      where: { email: payload.email },
      update: {},
      create: {
        email: payload.email,
        name: payload.name,
      }
    });

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    return res.json({ token });
  } catch (error) {
    console.error("Error verifying Google token:", error);
    return res.status(500).json({ message: "Authentication failed" });
  }
});

export default router;