import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function BackgroundRippleEffectDemo() {
  // Array of strings for the 6 boxes
  const boxData = [
    "Analytics,  fsdfsdfsdfs",
    "Reports",
    "Insights",
    "Metrics",
    "Trends",
    "Statistics",
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect />

      {/* Main heading */}
      <div className="mb-12 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Data Visualization
        </h2>
      </div>

      {/* Grid of 6 boxes - 3 up, 3 down */}
      <div className="relative z-10 grid grid-cols-3 gap-6 w-full max-w-6xl px-8">
        {boxData.map((text, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 flex items-center justify-center text-center hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white dark:text-neutral-100 md:text-xl">
              {text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
