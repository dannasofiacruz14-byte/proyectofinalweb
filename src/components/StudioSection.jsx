import { useState, useEffect } from 'react';
import { CloudSun, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const cities = [
  { name: 'Bogotá', lat: 4.711, lon: -74.0721 },
  { name: 'Medellín', lat: 6.2442, lon: -75.5812 },
  { name: 'Cartagena', lat: 10.391, lon: -75.4794 },
];

export default function StudioSection({ onNavigate }) {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // API 2
  useEffect(() => {
    setLoadingWeather(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current_weather) {
          setWeather(data.current_weather);
        }
        setLoadingWeather(false);
      })
      .catch((err) => {
        console.error('Error al cargar el clima:', err);
        setLoadingWeather(false);
      });
  }, [selectedCity]);

  // Recomendación dinámica de prenda según la temperatura
  const getOutfitRecommendation = (temp) => {
    if (temp <= 17) {
      return {
        label: 'CLIMA FRÍO / CAPAS',
        item: 'Pilgrimage Lightkeeper Long Sleeve Boxy Fit + Barrel Jean',
        note: 'Ideal para temperaturas bajas con gramaje pesado de algodón.',
      };
    }
    if (temp <= 24) {
      return {
        label: 'CLIMA TEMPLADO / STUDIO FIT',
        item: 'Pilgrimage Witness Tshirt Vintage Black + Relaxed Cargo Pants',
        note: 'Equilibrio perfecto entre silueta boxy y frescura urbana.',
      };
    }
    return {
      label: 'CLIMA CÁLIDO / LIGHTWEIGHT',
      item: 'Line Undergold Studio Tank Top White + Basics Denim Jort',
      note: 'Cortes amplios y transpirables para días soleados.',
    };
  };

  const recommendation = weather ? getOutfitRecommendation(weather.temperature) : null;

  return (
    <section className="min-h-screen bg-white pt-32 pb-28 px-4 md:px-10 text-gray-600">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/*Cabecera Editorial */}
        <div className="border-b border-gray-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-gray-400 font-semibold">
              ARCHIVE & CONCEPT STORE
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-800 uppercase mt-2">
              UNDERGOLD STUDIO
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-gray-500 leading-relaxed">
            Exploramos la intersección entre el diseño industrial, la cultura callejera contemporánea y siluetas de alto gramaje confeccionadas en Colombia.
          </p>
        </div>

        {/*  Widget Interactivo API 2 Recomendador de Outfit por Clima */}
        <div className="bg-[#f4f4f4] p-6 md:p-10 rounded-lg border border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-300/70">
            <div className="flex items-center gap-3">
              <CloudSun size={24} className="text-gray-700" strokeWidth={1.5} />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
                  WEATHER STYLING ASSISTANT
                </h3>
                <p className="text-[11px] text-gray-500">
                  Sugerencia de prendas en tiempo real según el clima de tu ciudad
                </p>
              </div>
            </div>

            {/* Selector de Ciudad */}
            <div className="flex gap-2">
              {cities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                    selectedCity.name === city.name
                      ? 'bg-black text-white font-semibold'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-black'
                  }`}
                >
                  <MapPin size={12} />
                  {city.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resultado de la API */}
          <div className="pt-6">
            {loadingWeather ? (
              <p className="text-xs uppercase tracking-widest text-gray-400 animate-pulse">
                Consultando clima en {selectedCity.name}...
              </p>
            ) : weather && recommendation ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="bg-white p-5 rounded-md border border-gray-200">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">
                    TEMPERATURA ACTUAL EN {selectedCity.name}
                  </span>
                  <p className="text-4xl font-black text-gray-800 mt-1">
                    {weather.temperature}°C
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 bg-gray-100 text-gray-600 rounded">
                    {recommendation.label}
                  </span>
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-md border border-gray-200">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      OUTFIT RECOMENDADO
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-gray-800">
                      {recommendation.item}
                    </h4>
                    <p className="text-xs text-gray-500">{recommendation.note}</p>
                  </div>

                  <button
                    onClick={() => onNavigate('ALL')}
                    className="shrink-0 bg-neutral-800 hover:bg-black text-white text-[11px] uppercase tracking-[0.2em] px-5 py-3 rounded-md font-medium transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    VER EN CATÁLOGO
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-xs text-red-500">No se pudo obtener el clima en este momento.</p>
            )}
          </div>
        </div>

        {/*  Galería Lookbook Asimétrica */}
        <div className="space-y-6">
          <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-500">
            LOOKBOOK — PILGRIMAGE CAPSULE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[3/4] bg-[#f4f4f4] overflow-hidden relative group">
              <img
                src="https://undergoldapparel.com/cdn/shop/files/1_2b094aeb-0585-42e9-9677-971108a37f74.jpg?v=1792532344&width=800"
                alt="Lookbook 01"
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-white/90 px-2.5 py-1 text-gray-700 font-semibold">
                LOOK 01 / WITNESS
              </span>
            </div>

            <div className="aspect-[3/4] bg-[#f4f4f4] overflow-hidden relative group">
              <img
                src="https://undergoldapparel.com/cdn/shop/files/1_467e1fd2-d86e-45c4-9787-f6193cbfaee7.jpg?v=1792536179&width=800"
                alt="Lookbook 02"
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-white/90 px-2.5 py-1 text-gray-700 font-semibold">
                LOOK 02 / DEPARTMENT DENIM
              </span>
            </div>

            <div className="aspect-[3/4] bg-[#f4f4f4] overflow-hidden relative group">
              <img
                src="https://undergoldapparel.com/cdn/shop/files/1_fa8a6e02-ea03-4497-84e7-5279de95e2d5.jpg?v=1792533081&width=800"
                alt="Lookbook 03"
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-white/90 px-2.5 py-1 text-gray-700 font-semibold">
                LOOK 03 / LIGHTKEEPER
              </span>
            </div>
          </div>
        </div>

        {/*  Reserva de Cita Privada en Showroom */}
        <div className="border-t border-gray-200 pt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800">
              AGENDA TU VISITA AL SHOWROOM
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-md">
              Conoce nuestras piezas de archivo y recibe asesoría personalizada de estilismo en nuestras sedes de Bogotá (Zona T) y Medellín (Provenza).
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#f4f4f4] p-6 rounded-lg flex items-center gap-3 text-gray-700">
              <CheckCircle2 size={20} className="text-black shrink-0" />
              <p className="text-xs font-medium">
                Solicitud recibida. Nuestro equipo de Studio te confirmará el horario por correo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="px-4 py-3 text-xs border border-gray-300 rounded-md outline-none focus:border-black flex-1"
              />
              <select className="px-4 py-3 text-xs border border-gray-300 rounded-md outline-none focus:border-black bg-white">
                <option value="Bogota">Showroom Bogotá</option>
                <option value="Medellin">Showroom Medellín</option>
              </select>
              <button
                type="submit"
                className="bg-[#666666] hover:bg-black text-white text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-md font-medium transition-colors cursor-pointer"
              >
                AGENDAR
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}