import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F1E8] text-[#2B211C]">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[4px] focus:bg-[#2B211C] focus:px-4 focus:py-2 focus:text-xs focus:text-[#F7F1E8]"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu-principal" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
