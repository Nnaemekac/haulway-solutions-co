import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HambergerMenu, CloseSquare } from "iconsax-react";

const navLinks = [
  { name: "Home",          href: "/" },
  { name: "About us",      href: "/about" },
  { name: "BPO Solutions", href: "/bpo-solutions" },
  { name: "IT Services",   href: "/it-services" },
  { name: "Blogs",         href: "/blogs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* -------------------------------- effects -------------------------------- */

  // shadow after scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile drawer when route changes
  useEffect(() => setIsMenuOpen(false), [location]);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  /* -------------------------------- JSX ----------------------------------- */

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 lg:mx-[3rem] lg:mt-4 mt-[0] lg:rounded-[50px] rounded-[0] bg-white/30 backdrop-blur-[40px] transition-all duration-300
        ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* ------------ Logo ------------ */}
          <Link to="/" className="flex shrink-0 items-center">
            <img src="/static/logo.png" alt="logo" className="max-w-[150px]" />
          </Link>

          {/* ------ Desktop nav links ------ */}
          <nav className={`${isMenuOpen ? 'lg:h-auto h-screen fixed top-[0] inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-start justify-center gap-8 lg:p-[0] p-[2rem]' : 'hidden'} md:flex md:items-center md:gap-10 md:relative md:bg-transparent`}>
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                className="text-lg md:text-sm font-medium text-white hover:opacity-80"
              >
                {name}
              </Link>
            ))}

            {/* Mobile CTA buttons */}
            <div className="flex flex-col gap-4 md:hidden mt-8">
              <Link
                to="/signin"
                className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:opacity-90 text-center"
              >
                Sign in
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10 text-center"
              >
                Contact us
              </Link>
            </div>
          </nav>

          {/* -------- Desktop CTA buttons ---------- */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link
              to="/signin"
              className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:opacity-90"
            >
              Sign&nbsp;in
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact&nbsp;us
            </Link>
          </div>

          {/* ------- Mobile burger --------- */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            {isMenuOpen ? (
              <CloseSquare size="24" color="#ffffff" />
            ) : (
              <HambergerMenu size="24" color="#ffffff" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}