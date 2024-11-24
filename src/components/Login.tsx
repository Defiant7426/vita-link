import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (username === "admin" && password === "admin") {
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    };


    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-vita-link">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
          <img
            src="https://vitalink.nyc3.cdn.digitaloceanspaces.com/vitalink_logo.png"
            alt="Vitalink"
            className="w-32 mx-auto mb-6"
          />
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 px-4 bg-vita-link text-white font-semibold rounded-lg shadow hover:bg-vita-link-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Login
            </button>

            <a
              href="/register"
              className="block text-center text-sm text-vita-link hover:text-vita-link-dark"
            > Resitrarse
            </a>
          </form>
        </div>
      </div>
    );
  }
  