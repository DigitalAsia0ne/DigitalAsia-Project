import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-6 py-4 text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center pl-0 sm:pl-6 space-x-2">
          <img src="https://i.pinimg.com/736x/94/3f/cf/943fcf1ad73de4334e083475d1ab9541.jpg" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-bold">Element X</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center  space-x-6 text-sm text-gray-300">
          <Link to="/" className="text-white font-medium hover:text-orange-400">Home</Link>
          <Link to="/" className="hover:text-[#FF9C1F]">Features</Link>
          <Link to="/" className="hover:text-[#FF9C1F]">Pricing</Link>
          <Link to="/" className="hover:text-[#FF9C1F]">Resource ▾</Link>
          <Link to="/" className="hover:text-[#FF9C1F]">About</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-2">
          <Link to="/login" className="border border-gray-500 px-4 pr-3 py-1 rounded hover:bg-gray-700">Sign In</Link>
          <Link to="/register" className="bg-[#FF9C1F] hover:bg-[#FF9C1F] px-4 py-1 rounded text-white">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 py-4 ">
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
            <Link to="/" className="text-white font-medium hover:text-[#FF9C1F]">Home</Link>
            <Link to="/features" className="hover:text-[#FF9C1F]">Features</Link>
            <Link to="/pricing" className="hover:text-[#FF9C1F]">Pricing</Link>
            <Link to="/resources" className="hover:text-[#FF9C1F]">Resource ▾</Link>
            <Link to="/about" className="hover:text-[#FF9C1F]">About</Link>
          </div>
          <div className="flex flex-col space-y-2 pt-2 px-6 py-4">
            <Link to="/login" className="border border-gray-500 px-4 py-1 rounded text-center hover:bg-gray-700">Sign In</Link>
            <Link to="/register" className="bg-[#FF9C1F] hover:bg-[#FF9C1F] px-4 py-1 rounded text-white text-center">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
