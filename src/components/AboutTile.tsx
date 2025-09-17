import "../App.css";

const AboutTile = () => {
  return (
    <div
      className="w-full p-15 rounded-tl-3xl rounded-tr-3xl h-[100vh] bg-black"
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
    >
      <h1 className="font-serif text-6xl leading-[4.5vw] pb-5 text-white">
        We harness AI and ocean intelligence to transform raw data into
        actionable climate insights.
      </h1>

      <div className="w-full rounded-xl border-t-1 flex pl-3 pr-3 pt-10 justify-between gap-10">
        <div className="w-[700px] flex-column text-lg font-serif space-y-4 text-white">
          <h1 className="font-mono sm:text-2xl text-justify tracking-tight">
            What is this about:
          </h1>
        </div>

        <div className="w-full flex flex-row justify-between gap-6 h-full">
          <div className="flex-1 border-l-1 border-white text-white flex flex-col justify-between gap-15 p-5">
            <h1 className="text-3xl font-bold">1.</h1>
            <p className="text-base leading-relaxed">
              Combines AI, data science, and ocean research to analyze complex
              marine data.
            </p>
          </div>

          <div className="flex-1 border-l-1 border-white text-white flex flex-col justify-between gap-15 p-5">
            <h1 className="text-3xl font-bold">2.</h1>
            <p className="text-base leading-relaxed">
              Supports researchers in understanding ocean patterns and tracking
              climate change.
            </p>
          </div>

          <div className="flex-1 border-l-1 border-white text-white flex flex-col justify-between gap-15 p-5">
            <h1 className="text-3xl font-bold">3.</h1>
            <p className="text-base leading-relaxed">
              Enables smarter, sustainable decisions for protecting and managing
              ocean resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTile;
