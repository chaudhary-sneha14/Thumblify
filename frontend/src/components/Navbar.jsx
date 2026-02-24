import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <Link to={"/"}>
          <img className="h-8.5 w-auto" src="/logo.svg" alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <NavLink to={"/"} className="hover:text-violet-500 transition">
            Home
          </NavLink>
          <NavLink to={"/generate"} className="hover:text-violet-500 transition">
            Generator
          </NavLink>
          {isLoggedIn ? (
            <NavLink
              to={"/my-generation"}
              className="hover:text-violet-500 transition"
            >
              My Generations
            </NavLink>
           ) : (
            <NavLink to={"#"} className="hover:text-violet-500 transition">
              About
            </NavLink>
          )} 

          <NavLink to={"#"} className="hover:text-violet-500 transition">
            Contact Us
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="rounded-full size-8 bg-white/20 border-2 border-white/10">
                {user?.name.charAt(0).toUpperCase()}
              </button>
                <div className="absolute hidden group-hover:block top-6 right-0 pt-4">
                  <button
                    onClick={logout}
                    className="bg-white/20 border-2 border-white/10 px-5 py-1.5 rounded"
                  >
                    logout
                  </button>
                </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block px-6 py-2.5 bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all rounded-full"
            >
              Get Started
            </button>
          )}
           {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <MenuIcon size={26} className="active:scale-90 transition" />
        </button>
        </div>

       
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavLink onClick={() => setIsOpen(false)} to={"/"}>
          Home
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} to={"/generate"}>
          Generator
        </NavLink>
        {isLoggedIn ? (
          <NavLink onClick={() => setIsOpen(false)} to={"/my-generation"}>
            My Generations
          </NavLink>
        ) : (
          <NavLink onClick={() => setIsOpen(false)} to={"/about"}>
            About
          </NavLink>
        )}

        <NavLink onClick={() => setIsOpen(false)} to={"#"}>
          Contact us
        </NavLink>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
          >
            Logout
          </button>
        ) : (
          <NavLink onClick={() => setIsOpen(false)} to={"/login"}>
            Login
          </NavLink>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-violet-600 hover:bg-violet-700 transition text-white rounded-md flex"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
