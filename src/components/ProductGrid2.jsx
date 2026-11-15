import { Heart } from 'lucide-react';

const products2 = [

  {
    id: 1,
    name: 'Basics UNDGLD Denim Jort Black',
    price: '$360.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/2_1b2f25cf-05e7-4449-861d-3c3d2b3ea5cc.jpg?v=1789568313&width=800',
  },
  {
    id: 2,
    name: 'Line Undergold Studio Tank Top White',
    price: '$200.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_169b3c04-6805-4611-8fdf-fdd9c79a7e86.jpg?v=1789568380&width=800',
  },
  {
    id: 3,
    name: 'Line Basic Long Sleeve Tshirt White',
    price: '$260.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/7_1f722d57-a5f6-4285-b7c3-db96fd8c2fac.jpg?v=1776120475&width=800',
  },
  {
    id: 4,
    name: 'Line Basic Long Sleeve Tshirt Black',
    price: '$260.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/2_00a0d2f0-1163-406d-bd7d-71fba715ec36.jpg?v=1776120659&width=800',
  },

  {
    id: 5,
    name: 'Line Basic Baby Tee White',
    price: '$230.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_c6a30ee3-4bad-4f09-894b-5db2672ea86a.jpg?v=1773785292&width=800',
  },
  {
    id: 6,
    name: 'W Line Basic Long Sleeve Tshirt Black',
    price: '$250.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_0fbdcd91-0ccb-4d8a-8d64-753402a05121.jpg?v=1775854282&width=800',
  },
  {
    id: 7,
    name: 'Basics Relaxed Cargo Pants Black',
    price: '$420.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_d665abbc-fd02-44ff-b013-ffee407e9a04.jpg?v=1775849441&width=800',
  },
  {
    id: 8,
    name: 'Basics Relaxed Cargo Pants Gray',
    price: '$420.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_ef18b006-d903-401e-97fc-6a389af659b0.jpg?v=1775853828&width=800',
  },
];

export default function ProductGrid2() {
  return (

    <section className="bg-white py-10 px-3 md:px-5 relative pb-24 w-full">


      <div className="w-full mb-6 px-1">
        <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-500">
          LINEA DE BÁSICOS & ESENCIALES.
        </h3>
      </div>


      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-10">
        {products2.map((product) => (
          <div key={product.id} className="group flex flex-col cursor-pointer">


            <div className="relative bg-[#f4f4f4] aspect-[3/4] flex items-center justify-center p-4 overflow-hidden">
              {/* Botón de Favorito */}
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
                <button className="w-full bg-[#b0b0b0] hover:bg-black text-white text-xs uppercase tracking-[0.2em] py-3 rounded-md font-medium transition-colors">
                  COMPRAR
                </button>
              </div>
            </div>

 
            <div className="mt-3 space-y-1">
              <h4 className="text-xs font-semibold text-gray-800 tracking-wide leading-snug">
                {product.name}
              </h4>
              <p className="text-xs text-gray-500 font-medium">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <button className="border border-gray-300 hover:border-black text-gray-700 hover:text-black text-[11px] uppercase tracking-[0.2em] font-medium px-8 py-2.5 rounded-md transition-all duration-300 cursor-pointer">
          VER TODO
        </button>
      </div>
    </section>
  );
}