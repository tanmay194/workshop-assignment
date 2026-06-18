interface HeroProps {
  onEnrollClick: () => void;
}

function Hero({ onEnrollClick }: HeroProps) {
  return (
    // Added pt-28 to provide spacing below the fixed Navbar
    <header className="bg-gradient-to-br from-blue-900 to-blue-500 text-white py-20 px-5 text-center pt-28">
      <div className="max-w-4xl mx-auto">
        <span className="bg-sky-400 text-blue-900 px-4 py-1.5 rounded-full text-sm font-bold uppercase inline-block mb-5">
          Summer 2026 Live Camp
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tighter">
          AI & Robotics Summer Workshop
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90 font-normal">
          Empower your child with the future. Learn core programming concepts, assemble robotics building blocks, and experiment with artificial intelligence models through fun hands-on projects!
        </p>
        <button 
          onClick={onEnrollClick} 
          className="bg-amber-500 text-slate-800 px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-amber-400 transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </header>
  );
}

export default Hero;