import "../App.css";
import geo from "../images/geo.jpg";
import Ai from "../images/Ai.jpg";
import natural from "../images/natural.jpg";
import dashboard from "../images/dashboard.jpg";
const Tile2 = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="bg-black p-10">
        <h1 className="text-5xl md:text-8xl text-white font-serif">
          Collaborating
        </h1>
        <h1 className="text-6xl md:text-8xl text-white pb-10 font-serif">
          for a sustainable blue future
        </h1>

        <div className="flex flex-col gap-20 justify-between">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="w-full md:w-1/2 bg-black">
              <div className="h-[300px] md:h-[405px] overflow-hidden">
                <img
                  src={geo}
                  alt="image2"
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="text-white font-serif text-lg pt-5">
                Geospatial Visualizations
              </h1>
              <p className="text-white/60 font-mono text-base tracking-tight">
                Geospatial ocean visualizations map and analyze marine patterns
                like currents, temperature, and biodiversity.
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-black">
              <div className="h-[300px] md:h-[405px] overflow-hidden">
                <img
                  src={Ai}
                  alt="iamge2"
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="text-white font-serif text-lg pt-5">
                AI + LLM Querying
              </h1>
              <p className="text-white/60 font-mono text-base tracking-tight">
                Large Language Models translate natural language into optimized
                queries, giving researchers direct answers from raw data.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="w-full md:w-1/2 bg-black">
              <div className="h-[300px] md:h-[405px] overflow-hidden">
                <img
                  src={natural}
                  alt="iamge2"
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="text-white font-serif text-lg pt-5">
                Natural Language Interface
              </h1>
              <p className="text-white/60 font-mono text-base tracking-tight">
                Users can explore ocean trends without coding or technical
                expertise—just by asking questions in plain English.
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-black">
              <div className="h-[300px] md:h-[405px] overflow-hidden">
                <img
                  src={dashboard}
                  alt="iamge2"
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="text-white font-serif text-lg pt-5">
                Minimal and Interactive Dashboard
              </h1>
              <p className="text-white/60 font-mono text-base tracking-tight">
                Dynamic charts and plots make it easy to track changes and
                uncover hidden patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile2;
