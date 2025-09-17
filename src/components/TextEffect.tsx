import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Explore",
      className: "text-white",
    },
    {
      text: "Data",
      className: "text-white",
    },
    {
      text: "Map by Map",
      className: "text-white",
    },
    {
      text: "With",
      className: "text-white",
    },
    {
      text: "FloatChat.",
      className: "text-purple-600",
    },
  ];
  return (
    <div className="flex flex-col  justify-center h-[90px]  ">
      <TypewriterEffectSmooth words={words} />
      <h1 className="text-white/60 text- font-mono pb-2">
        Drag or scroll the map to explore different regions
      </h1>
    </div>
  );
}
