import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login Successful');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#171717] p-10 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[#FFFFFF]">Login to Your Account</h2>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg py-3 rounded-lg hover:hover:bg-[#FF9C1F]  transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
