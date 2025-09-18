import { SparklesText } from "@/components/SparkleText";
import SatelliteMap from "../components/SatelliteMap";
import { TypewriterEffectSmoothDemo } from "@/components/TextEffect";
import FloatComponent from "@/components/FloatComponent";

const Dashboard = () => {
  return (
    <div className="bg-black min-h-screen ">
      <SparklesText />
      <h1 className="text-white pl-4 text-lg pb-2 font-mono tracking-tighter">
        Welcome Back, User
      </h1>

      <div className="flex flex-row p-3 justify-between gap-5">
        <div className="flex flex-col border-1 border-gray-700 rounded-xl p-5 h-1/2 w-1/2 h-[600px] ">
          <div className="p-2"></div>
          <div className="pl-5 pr-5">
            <TypewriterEffectSmoothDemo />
          </div>
          <SatelliteMap />
        </div>

        <div
          className="flex flex-col w-1/2 p-5 items-center justify-center border-1 border-gray-700 rounded-xl"
          style={{ backgroundColor: "rgb(0, 2, 20)" }}
        >
          <h1 className="text-white text-lg font-mono tracking-tighter pl-9 pb-3">
            No. Of Active Floats and Profiles in Last 7 Days
          </h1>
          <FloatComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
