import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay bloqueado:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-end p-6 md:p-12">


      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

  
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-[1]" />

      {/* palabras en la esquina  */}
      <div className="relative z-10 text-white max-w-lg space-y-3 mb-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider font-sans uppercase">
          PILGRIMAGE
        </h2>
        <p className="text-[11px] md:text-xs tracking-[0.2em] text-gray-200 uppercase font-medium">
          NOVEMBER RELEASE
        </p>
        <div className="pt-1">
          <button className="border border-white/80 bg-black/20 backdrop-blur-sm px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            VER COLECCIÓN
          </button>
        </div>
      </div>
    </section>
  );
}