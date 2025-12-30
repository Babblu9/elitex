import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Solutions", path: "/ai-solutions" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

interface NavbarProps {
  currentPath?: string;
}

export const Navbar = ({ currentPath = "/" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-transparent backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={typeof logo === 'string' ? logo : (logo as any).src}
                alt="EliteX Solutions"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    className="relative px-3 py-2 text-sm font-medium transition-colors duration-300"
                  >
                    {active && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={active ? "text-primary" : "text-gray-600 hover:text-primary"}>
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 shadow-lg shadow-primary/20">
                <a href="/contact">Get Started</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors duration-300 py-2 ${isActive(link.path)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full rounded-full" size="default">
                  <a href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
