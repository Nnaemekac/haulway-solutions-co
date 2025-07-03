import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HambergerMenu, CloseSquare } from "iconsax-react";

const navLinks = [
  { name: "Home",          href: "/" },
  { name: "About us",      href: "/about" },
  { name: "BPO Solutions", href: "/bpo-solutions" },
  { name: "IT Services",   href: "/it-services" },
  { name: "Blogs",         href: "/blogs" },
  { name: "Stack Check",   href: "/stack-check" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <>
    <header
      className={`fixed left-0 right-0 top-0 z-50 lg:mx-[3rem] mx-[1rem] mt-4 rounded-[50px] rounded-[0] bg-white/30 backdrop-blur-[40px] transition-all duration-300
        ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img src="/static/logo.png" alt="logo" className="max-w-[150px]" />
          </Link>

          {/* Menu Button (always visible) */}
          <button
            className="p-2 z-50 flex items-center gap-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <HambergerMenu size="24" color="#ffffff" />
            <span className="hidden md:inline text-white font-medium">Menu</span>
          </button>
        </div>
      </div>

      
    </header>
    {/* Fullscreen Nav Drawer */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-[100] py-[2rem] px-[1rem] transition-all duration-300 overflow-y-auto ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 p-2"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseSquare size="32" color="#fff" />
        </button>

        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map(({ name, href }) => {
            const isActive = location.pathname === href || (href !== "/" && location.pathname.startsWith(href));
            return (
              <Link
                key={name}
                to={href}
                className={`text-2xl md:text-3xl text-white hover:opacity-80 transition ${
                  isActive ? "font-bold underline" : "font-light"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 max-w-[450px] w-full mx-auto mt-12">
          <Link
            to="/signin"
            className="rounded-[.7rem] bg-white px-8 py-3 text-lg font-medium text-black transition hover:opacity-90 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign in
          </Link>
          <Link
            to="/jobs"
            className="rounded-[.7rem] bg-white px-8 py-3 text-lg font-medium text-black transition hover:opacity-90 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Our Talent Pool
          </Link>
          <Link
            to="/contact"
            className="rounded-[.7rem] border border-white px-8 py-3 text-lg font-medium text-white transition hover:bg-white/10 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>
      </>
  );
}