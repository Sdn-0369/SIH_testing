import floatchat from "../images/floatchat.jpg";
const Tile3 = () => {
  return (
    <div className="flex flex-col p-10">
      <h1 className="text-8xl font-serif pb-5 text-white">
        An approach to strategic clarity.
      </h1>
      <h1 className="text-xl font-mono pb-5 text-white/70 tracking-tight">
        A data-driven pathway that transforms ocean complexity into clear
        insights for sustainability
      </h1>
      <img
        src={floatchat}
        alt="image2"
        className="object-cover h-full w-full"
      />
      <div></div>
    </div>
  );
};

export default Tile3;
