"use client";
import Providers from "@/app/admin/utils/providers";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [success, setSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await login(email, password);
      setSuccess(true);
      setErrors({});
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setErrors({
        general: "Login failed. Please check your credentials and try again.",
      });
    }
  };

  return (
    <Providers>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            Login
          </h1>
          {errors.general && (
            <div className="p-4 mb-4 text-red-800 bg-red-200 rounded-lg">
              {errors.general}
            </div>
          )}
          {success && (
            <div className="p-4 mb-4 text-green-800 bg-green-200 rounded-lg">
              Login successful!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 mt-1 text-gray-700 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-3 py-2 mt-1 text-gray-700 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          {success && (
            <button
              onClick={() => router.push("/admin/create")}
              className="w-full px-4 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500"
            >
              Go to Service Editor
            </button>
          )}
        </div>
      </div>
    </Providers>
  );
};

export default LoginPage;
