import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'; // <-- 1. Import the provider
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";
import "./App.css";

function App() {
  // 2. Get the Client ID using the correct syntax for your tool
  // For Vite:
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // For Create React App (uncomment if you use it):
  // const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID!;

  return (
    // 3. Wrap your entire router with the provider
    <GoogleOAuthProvider clientId={googleClientId!}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;