import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { studioConfig } from '../config/studioConfig';

const navItems = [
  { to: '/services', label: 'Soins' },
  { to: '/mariage', label: 'Mariage' },
  { to: '/notre-approche', label: 'Notre approche' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F1E8]/95 backdrop-blur-sm border-b border-[#2B211C]/12">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
        <div className="flex h-16 md:h-20 items-center justify-between gap-8">
          {/* Zone 1 : Brand wordmark (single-line) */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[-0.01em] text-[#2B211C] whitespace-nowrap shrink-0 transition-opacity duration-200 hover:opacity-80"
          >
            {studioConfig.brandName}
          </Link>

          {/* Zone 2 : Desktop navigation links */}
          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7 lg:gap-9">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative py-1 text-[13px] tracking-[0.04em] whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#2B211C] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#B76E79]'
                      : 'text-[#4E4541] hover:text-[#2B211C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3 : Primary CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/reservation"
              className="hidden md:inline-flex items-center justify-center rounded-[4px] bg-[#2B211C] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#3B2E27]"
            >
              Prendre rendez-vous
            </Link>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-[4px] border border-[#8A7A6B]/30 text-[#2B211C] transition-colors duration-200 hover:bg-[#EDE6DA]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-[#2B211C]/12 bg-[#F7F1E8]"
        >
          <nav aria-label="Navigation mobile" className="mx-auto max-w-7xl px-5 py-5 flex flex-col gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center min-h-[44px] px-2 text-base border-b border-[#8A7A6B]/15 transition-colors ${
                  isActive ? 'font-serif text-[#2B211C] font-medium' : 'text-[#4E4541]'
                }`
              }
            >
              Accueil
            </NavLink>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center min-h-[44px] px-2 text-base border-b border-[#8A7A6B]/15 transition-colors ${
                    isActive ? 'font-serif text-[#2B211C] font-medium' : 'text-[#4E4541]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Link
                to="/reservation"
                className="flex min-h-[46px] w-full items-center justify-center rounded-[4px] bg-[#2B211C] px-5 py-3 text-xs font-medium uppercase tracking-[0.08em] text-[#F7F1E8]"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
