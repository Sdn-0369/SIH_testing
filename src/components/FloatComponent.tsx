const FloatComponent = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1 w-full max-w-2xl mx-auto p-1 rounded-lg h-96">
      {/* Top row - 3 equal cards */}
      <div
        className="flex flex-col items-end justify-end text-white  border border-blue-300 p-4 font-mono text-sm"
        style={{ backgroundColor: "rgb(10, 11, 20)" }}
      >
        <div className="text-right">
          <div className="font-semibold">aoml</div>
          <div>Floats: 0</div>
          <div>Profiles: 0</div>
        </div>
      </div>

      <div
        className="flex flex-col items-end justify-end text-white  border border-blue-300 p-4 font-mono text-sm"
        style={{ backgroundColor: "rgb(10, 11, 20)" }}
      >
        <div className="text-right">
          <div className="font-semibold">incois</div>
          <div>Floats: 0</div>
          <div>Profiles: 0</div>
        </div>
      </div>

      <div
        className="flex flex-col items-end justify-end text-white border border-blue-300 p-4 font-mono text-sm"
        style={{ backgroundColor: "rgb(10, 11, 20)" }}
      >
        <div className="text-right">
          <div className="font-semibold">coriolis</div>
          <div>Floats: 0</div>
          <div>Profiles: 0</div>
        </div>
      </div>

      {/* Bottom row - csiro takes up full cell */}
      <div
        className="flex flex-col items-end justify-end text-white  border border-blue-300 p-4 font-mono text-sm"
        style={{ backgroundColor: "rgb(10, 11, 20)" }}
      >
        <div className="text-right">
          <div className="font-semibold">csiro</div>
          <div>Floats: 0</div>
          <div>Profiles: 0</div>
        </div>
      </div>

      {/* Bottom middle - split into bodc and jma */}
      <div className="grid grid-rows-2 gap-1">
        <div
          className="flex flex-col items-end justify-end text-white  border border-blue-300 p-2 font-mono text-sm"
          style={{ backgroundColor: "rgb(10, 11, 20)" }}
        >
          <div className="text-right font-semibold">bodc</div>
        </div>
        <div
          className="flex flex-col items-end justify-end text-white  border border-blue-300 p-2 font-mono text-sm"
          style={{ backgroundColor: "rgb(10, 11, 20)" }}
        >
          <div className="text-right font-semibold">jma</div>
        </div>
      </div>

      {/* Bottom right - csio */}
      <div
        className="flex flex-col items-end justify-end text-white border border-blue-300 p-4 font-mono text-sm"
        style={{ backgroundColor: "rgb(10, 11, 20)" }}
      >
        <div className="text-right">
          <div className="font-semibold">csio</div>
          <div>Floats: 0</div>
          <div>Profiles: 0</div>
        </div>
      </div>
    </div>
  );
};

export default FloatComponent;
