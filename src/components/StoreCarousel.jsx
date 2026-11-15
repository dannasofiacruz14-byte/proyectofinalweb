import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: 'MEDELLÍN - PROVENZA',
    address: 'Cra. 34 #7 - 67',
    city: 'El Poblado, Medellín, Antioquia.',
    image: 'https://undergoldapparel.com/cdn/shop/files/HOME_PROVENZA_V.jpg?v=1785271524&width=1600',
  },
  {
    id: 2,
    name: 'BOGOTÁ - ZONA T',
    address: 'Calle 82 #12 - 35',
    city: 'Zona Rosa, Bogotá, D.C.',
    image: 'https://undergoldapparel.com/cdn/shop/files/HOME_TESORO_V.jpg?v=1785271524&width=1600',
  },
  {
    id: 3,
    name: 'CALI - PEÑÓN',
    address: 'Av. 2 Oeste #2 - 40',
    city: 'El Peñón, Cali, Valle del Cauca.',
    image: 'https://undergoldapparel.com/cdn/shop/files/HOME_CALI.jpg?v=1785271139&width=2400',
  },
  {
    id: 4,
    name: 'BARRANQUILLA - ALTO PRADO',
    address: 'Cra. 53 #79 - 128',
    city: 'Alto Prado, Barranquilla, Atlántico.',
    image: 'https://undergoldapparel.com/cdn/shop/files/HOME_BARRANQUILLA.jpg?v=1785271363&width=2400',
  },
  {
    id: 5,
    name: 'CARTAGENA - CENTRO HISTÓRICO',
    address: 'Calle de los Santos de Piedra #34 - 10',
    city: 'Centro Histórico, Cartagena, Bolívar.',
    image: 'https://undergoldapparel.com/cdn/shop/files/HOME_BOGOTA_V_dae4adc9-ec55-428d-b08c-fa7344a526a2.jpg?v=1793223614&width=1600',
  },
  {
    id: 6,
    name: 'PEREIRA - CIRCUNVALAR',
    address: 'Av. Circunvalar #5 - 20',
    city: 'Circunvalar, Pereira, Risaralda.',
    image: 'https://undergoldapparel.com/cdn/shop/files/HOME_PEREIRA_V.jpg?v=1785271400&width=1600',
  },
];

export default function StoreCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? stores.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === stores.length - 1 ? 0 : prev + 1));
  };

  const currentStore = stores[currentIndex];

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-black select-none">

      {/* Imagen de fondo  */}
      <img
        src={currentStore.image}
        alt={currentStore.name}
        className="w-full h-full object-cover transition-all duration-700 brightness-90"
      />


      {/* Flecha Izquierda */}
      <button
        onClick={prevSlide}
        aria-label="Anterior tienda"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-none transition-colors border border-white/10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={nextSlide}
        aria-label="Siguiente tienda"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-none transition-colors border border-white/10"
      >
        <ChevronRight size={20} />
      </button>



      <div className="absolute bottom-12 left-8 md:left-16 z-20 text-white space-y-2 max-w-md">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider font-sans uppercase">
          {currentStore.name}
        </h3>
        <p className="text-xs font-semibold tracking-wide text-gray-200">
          {currentStore.address}
        </p>
        <p className="text-xs text-gray-400 font-normal pb-2">
          {currentStore.city}
        </p>
        <div>
          <button className="border border-white/80 bg-black/30 backdrop-blur-sm px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            VER TIENDA
          </button>
        </div>
      </div>





      <div className="absolute bottom-12 right-8 md:right-16 z-20 flex items-center gap-2">
        {stores.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a tienda ${index + 1}`}
            className={`h-[2px] transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-white'
                : 'w-4 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}