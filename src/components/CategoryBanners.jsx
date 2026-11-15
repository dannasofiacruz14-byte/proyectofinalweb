export default function CategoryBanners() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-6">

      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        
        {/* Banner 1 */}
        <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden group cursor-pointer bg-neutral-900">
          <img
            src="https://undergoldapparel.com/cdn/shop/files/HOME_HOMBRE_6e9d2a92-85e6-4ddd-96ec-5872976dc3df.jpg?v=1793219142&width=1000"
            alt="Categoría Hombre"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-90"
          />
 
          
          {/* Texto y Botón centrados abajo */}
          <div className="absolute bottom-12 inset-x-0 flex flex-col items-center space-y-3 z-10 text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-[0.25em] uppercase font-sans">
              HOMBRE
            </h3>
            <button className="border border-white/80 bg-black/30 backdrop-blur-md px-7 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              COMPRAR
            </button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden group cursor-pointer bg-neutral-900">
          <img
            src="https://undergoldapparel.com/cdn/shop/files/HOME_MUJER_c2f4c479-ed93-495c-8891-3635e135aa2e.jpg?v=1793219163&width=1000"
            alt="Categoría Mujer"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-90"
          />
          
          <div className="absolute bottom-12 inset-x-0 flex flex-col items-center space-y-3 z-10 text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-[0.25em] uppercase font-sans">
              MUJER
            </h3>
            <button className="border border-white/80 bg-black/30 backdrop-blur-md px-7 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              COMPRAR
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}