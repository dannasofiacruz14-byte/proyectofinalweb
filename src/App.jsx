import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CategoryBanners from './components/CategoryBanners';
import ProductGrid2 from './components/ProductGrid2';
import StoreCarousel from './components/StoreCarousel';
import Footer from './components/Footer';
import CatalogSection from './components/CatalogSection';
import StudioSection from './components/StudioSection';

export default function App() {
  // Estado que controla cuál de las 3 secciones está activa: 'HOME', 'ALL' o 'STUDIO'
  const [activeSection, setActiveSection] = useState('HOME');

  const handleNavigate = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Navbar superior (con prop para volver al HOME al tocar el logo) */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Renderizado condicional de las 3 secciones */}
      {activeSection === 'HOME' && (
        <main>
          <Hero />
          <ProductGrid onNavigate={handleNavigate} />
          <CategoryBanners />
          <ProductGrid2 onNavigate={handleNavigate} />
          <StoreCarousel />
        </main>
      )}

      {activeSection === 'ALL' && <CatalogSection />}

      {activeSection === 'STUDIO' && <StudioSection onNavigate={handleNavigate} />}

      {/* Footer común en todas las vistas */}
      <Footer />

      {/* Barra de Navegación Flotante Inferior Unificada */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-neutral-800/90 backdrop-blur-md text-white text-[10px] md:text-xs tracking-widest uppercase py-2.5 px-5 rounded-md flex items-center gap-5 md:gap-7 shadow-xl border border-white/10">
        <button
          onClick={() => handleNavigate('HOME')}
          className={`cursor-pointer transition-colors pb-0.5 ${
            activeSection === 'HOME' ? 'font-bold border-b border-white text-white' : 'text-gray-300 hover:text-white'
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => handleNavigate('ALL')}
          className={`cursor-pointer transition-colors pb-0.5 ${
            activeSection === 'ALL' ? 'font-bold border-b border-white text-white' : 'text-gray-300 hover:text-white'
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => handleNavigate('STUDIO')}
          className={`cursor-pointer transition-colors pb-0.5 ${
            activeSection === 'STUDIO' ? 'font-bold border-b border-white text-white' : 'text-gray-300 hover:text-white'
          }`}
        >
          STUDIO
        </button>
      </div>
    </div>
  );
}