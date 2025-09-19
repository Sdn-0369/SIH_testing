"use client";
import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import AuthFormWrapper, { LabelInputContainer } from "@/components/AuthFormWrapper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const API_BASE_URL = "http://localhost:3000";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/signin`, {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      console.log("Login successful!");

      navigate('/');

    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setError(null);
    const googleIdToken = credentialResponse.credential;

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/google`, {
        token: googleIdToken,
      });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      console.log("Google Sign-In successful!");

      navigate('/');

    } catch (err) {
      console.error("Google Sign-In failed:", err);
      setError("Google Sign-In failed. Please try again.");
    }
  };

  const handleGoogleError = () => {
    console.error("Google Sign-In error");
    setError("An error occurred during Google Sign-In.");
  };

  const socialButtons = (

    <div className="w-full">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap
        theme="outline"
        shape="rectangular"
        logo_alignment="center"

      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center">
      <AuthFormWrapper
        title="Welcome back"
        description="Enter your credentials to continue"
        onSubmit={handleSubmit}
        submitButtonText="Login"
        socialButtons={socialButtons}
      >
        {/* Input fields remain the same */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-400 text-sm">Email</Label>
          <Input id="email" placeholder="m@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="bg-[#303033] border border-neutral-700 rounded-lg placeholder:text-neutral-500 text-white focus:ring-1 focus:ring-blue-500 focus:outline-none h-10 px-3"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <div className="flex justify-between items-baseline">
            <Label htmlFor="password" className="text-neutral-400 text-sm">Password</Label>
            <a href="#" className="text-xs text-blue-500 hover:text-blue-400">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="bg-[#303033] border border-neutral-700 rounded-lg text-white focus:ring-1 focus:ring-blue-500 focus:outline-none h-10 px-3"
          />
        </LabelInputContainer>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
      </AuthFormWrapper>
    </div>
  );
};