import { useState, useEffect } from 'react';
import { Menu, Search, User, Heart, ShoppingBag } from 'lucide-react';

export default function Navbar({ activeSection = 'HOME', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // efecto
  const showSolidNav = isScrolled || activeSection !== 'HOME';

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <nav
        className={`w-full px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 border-b ${
          showSolidNav
            ? 'bg-white/95 backdrop-blur-md text-gray-500 border-gray-200 shadow-sm'
            : 'bg-transparent text-white border-transparent'
        }`}
      >

        {/* Centro: Logo UNDERGOLD al darle clic regresa al HOME */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1
            onClick={() => onNavigate && onNavigate('HOME')}
            className={`text-xl md:text-2xl font-black tracking-[0.3em] font-sans uppercase transition-colors duration-300 cursor-pointer ${
              showSolidNav ? 'text-gray-500' : 'text-white'
            }`}
          >
            UNDERGOLD
          </h1>
        </div>

        {/* Derecha: Iconos */}
        <div className="flex items-center gap-4">
          <button aria-label="Mi cuenta" className="hover:opacity-75 transition-opacity cursor-pointer">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Lista de deseos" className="hover:opacity-75 transition-opacity cursor-pointer">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Carrito de compras" className="hover:opacity-75 transition-opacity cursor-pointer">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}