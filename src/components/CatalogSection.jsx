import { useState, useEffect } from 'react';
import { Heart, Search } from 'lucide-react';
import { allProducts } from '../data/productsData';

export default function CatalogSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  const [currency, setCurrency] = useState('COP');
  const [usdRate, setUsdRate] = useState(0.00024); // Valor de respaldo por si tarda la red

  const categories = ['TODOS', 'CAMISETAS', 'BUZOS & MANGA LARGA', 'JEANS & PANTALONES'];

  // API 1: tasa de cambio real de COP a USD
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/COP')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates && data.rates.USD) {
          setUsdRate(data.rates.USD);
        }
      })
      .catch((err) => console.error('Error cargando tasa de cambio:', err));
  }, []);

  // Formatear el precio según la moneda seleccionada
  const formatPrice = (priceCOP) => {
    if (currency === 'COP') {
      return `$${priceCOP.toLocaleString('es-CO')} COP`;
    } else {
      const priceUSD = (priceCOP * usdRate).toFixed(2);
      return `$${priceUSD} USD`;
    }
  };

  // Filtrar productos por búsqueda y categoría
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'TODOS' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-white pt-32 pb-28 px-4 md:px-8">

      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-gray-900">
            CATÁLOGO COMPLETO
          </h2>
          <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">
            {filteredProducts.length} PRENDAS DISPONIBLES
          </p>
        </div>


        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-widest text-gray-400">Moneda:</span>
          <div className="inline-flex border border-gray-300 rounded-md overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setCurrency('COP')}
              className={`px-4 py-2 transition-colors cursor-pointer ${
                currency === 'COP' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              COP
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 transition-colors cursor-pointer ${
                currency === 'USD' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              USD
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Búsqueda y Botones de Filtro */}
      <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        {/* Filtros por categoría */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'border-black bg-black text-white font-semibold'
                  : 'border-gray-300 text-gray-600 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar prenda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs border border-gray-300 rounded-full outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      {/* Grilla de resultados */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center text-gray-400 text-sm uppercase tracking-widest">
          No se encontraron prendas con ese filtro.
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer">
              <div className="relative bg-[#f4f4f4] aspect-[3/4] flex items-center justify-center p-4 overflow-hidden">
                <button
                  aria-label="Agregar a favoritos"
                  className="absolute top-3 right-3 z-10 text-gray-600 hover:text-black transition-colors"
                >
                  <Heart size={18} strokeWidth={1.2} />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-[#666666] hover:bg-black text-white text-xs uppercase tracking-[0.2em] py-3 rounded-md font-medium transition-colors">
                    COMPRAR
                  </button>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">
                  {product.collection}
                </span>
                <h4 className="text-xs font-semibold text-gray-800 tracking-wide leading-snug">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-600 font-bold">
                  {formatPrice(product.priceCOP)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}