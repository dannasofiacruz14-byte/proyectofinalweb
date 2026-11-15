export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-500 pt-16 pb-20 px-8 md:px-16 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-500">
            Join the studio
          </h2>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full md:w-auto"
          >
            <div className="flex w-full md:w-[450px] border border-gray-300 rounded-lg overflow-hidden focus-within:border-gray-400 transition-colors">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 text-sm outline-none text-gray-600 placeholder-gray-400 bg-white"
                required
              />
              <button
                type="submit"
                className="bg-[#666666] hover:bg-gray-800 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 transition-colors shrink-0 cursor-pointer"
              >
                SUSCRIBIRSE
              </button>
            </div>
          </form>
        </div>


        <div className="border-t border-gray-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-6 text-xs">

          <div>
            <h3 className="text-lg font-extrabold tracking-[0.25em] text-gray-500 uppercase">
              UNDERGOLD
            </h3>
          </div>


          <div className="space-y-3">
            <h4 className="font-semibold text-gray-400 uppercase tracking-wider">Marca</h4>
            <ul className="space-y-2 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Acerca de</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Lookbook</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Prensa</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-400 uppercase tracking-wider">Compañía</h4>
            <ul className="space-y-2 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Tiendas</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Trabaja con nosotros</a></li>
            </ul>
          </div>


          <div className="space-y-3">
            <h4 className="font-semibold text-gray-400 uppercase tracking-wider">Servicio al cliente</h4>
            <ul className="space-y-2 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Políticas</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Tratamiento de datos</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Cambios y devoluciones</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">UG x Kris R</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200" />

        <div className="pt-2 text-[11px] text-gray-400 font-medium">
          <p> 2026 UNDERGOLD STUDIO</p>
        </div>

      </div>
    </footer>
  );
}