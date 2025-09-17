import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-indigo-700 text-white shadow-lg">
      <div className="container w-full  px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">
          📚 Library<span className="text-yellow-300">MS</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-yellow-300 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-300 transition">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-yellow-300 transition">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/about" className="block hover:text-yellow-300">About</Link>
          <Link to="/services" className="block hover:text-yellow-300">Services</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
          <Link
            to="/login"
            className="block bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
