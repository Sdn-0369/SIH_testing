const Footer = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-between p-8 lg:p-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <div className="flex items-center">
          <h2 className="text-white/70 font-serif text-2xl lg:text-5xl tracking-wide">
            DIVE DEEPER INTO OCEANS
          </h2>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2 font-mono">
              Resources
            </h3>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors font-mono flex items-center text-sm"
            >
              GitHub
              <span className="ml-2 text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="text-white font-black text-6xl sm:text-8xl lg:text-[12rem] xl:text-[15rem] leading-none tracking-tighter select-none">
          FLOATCHAT
        </div>

        <div className="absolute bottom-4 right-0 flex items-center gap-4">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <div className="flex flex-col gap-1">
              <div className="w-4 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
