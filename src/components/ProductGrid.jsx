import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pilgrimage Apparition Tshirt White',
    price: '$350.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/2_ea8eabc6-3810-4395-84b9-c2bc9855fb1c.jpg?v=1792532067&width=800',
  },
  {
    id: 2,
    name: 'Pilgrimage Witness Tshirt Vintage Black',
    price: '$360.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_2b094aeb-0585-42e9-9677-971108a37f74.jpg?v=1792532344&width=800',
  },
  {
    id: 3,
    name: 'Pilgrimage Aurea Tshirt Black',
    price: '$350.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/2_6ff8b08f-eaa0-4a97-9ef2-5fd6a7e8244a.jpg?v=1792532550&width=800',
  },
  {
    id: 4,
    name: 'Pilgrimage Risen Tshirt Washed Brown',
    price: '$350.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_dc3c5938-5f50-4b37-87b1-8ac42064688c.jpg?v=1792532303&width=800',
  },
  {
    id: 5,
    name: 'Pilgrimage Miraculous Long Sleeve Boxy Fit Tshirt White',
    price: '$430.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_711e6be6-b5d1-49b7-a584-63eeb0801ffd.jpg?v=1792533159&width=800',
  },
  {
    id: 6,
    name: 'Pilgrimage Lightkeeper Long Sleeve Boxy Fit Tshirt Black',
    price: '$430.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_fa8a6e02-ea03-4497-84e7-5279de95e2d5.jpg?v=1792533081&width=800',
  },
  {
    id: 7,
    name: 'Pilgrimage Undergold Department Ripped Wide Jean Dirty Blue',
    price: '$580.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_467e1fd2-d86e-45c4-9787-f6193cbfaee7.jpg?v=1792536179&width=800',
  },
  {
    id: 8,
    name: 'Pilgrimage Undergold Department Barrel Jean Asphalt Gray',
    price: '$590.000 COP',
    image: 'https://undergoldapparel.com/cdn/shop/files/1_6dd53cd7-1fb3-4018-86a3-d760050c45a1.jpg?v=1792536222&width=800',
  },
];

export default function ProductGrid({ onNavigate }) {
  return (
    <section className="bg-white py-10 px-3 md:px-5 relative pb-24 w-full">
      <div className="w-full mb-6 px-1">
        <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-500">
          NEW IN PILGRIMAGE
        </h3>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-10">
        {products.map((product) => (
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
                <button className="w-full bg-[#666666] hover:bg-black text-white text-xs uppercase tracking-[0.2em] py-3 rounded-md font-medium transition-colors">
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

      {/* Botón "VER TODO" conectado a la sección ALL */}
      <div className="mt-14 flex justify-center">
        <button
          onClick={() => onNavigate && onNavigate('ALL')}
          className="border border-gray-300 hover:border-black text-gray-700 hover:text-black text-[11px] uppercase tracking-[0.2em] font-medium px-8 py-2.5 rounded-md transition-all duration-300 cursor-pointer"
        >
          VER TODO
        </button>
      </div>
    </section>
  );
}