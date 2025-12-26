import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden py-12 mt-12">
      {/* Watermark */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden flex justify-center opacity-[0.1]">
        <span className="text-[25vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap">
          ELITEX
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <img
                src={typeof logo === 'string' ? logo : (logo as any).src}
                alt="EliteX"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              EliteX Solutions is a premier digital transformation partner, providing one-stop solutions for businesses to scale, innovate, and grow in the modern era.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/ai-solutions" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Madhapur, Hyderabad,<br />Telangana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+91 89197 60792</span>
                  <span>+91 83749 30568</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>elitexsolutionsonline@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EliteX Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
