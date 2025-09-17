import { SparklesText } from "@/components/SparkleText";
import SatelliteMap from "../components/SatelliteMap";
import { TypewriterEffectSmoothDemo } from "@/components/TextEffect";
import FloatComponent from "@/components/FloatComponent";

const Dashboard = () => {
  return (
    <div className="bg-black min-h-screen ">
      <SparklesText />
      <h1 className="text-white pl-4 text-xl pb-2">Welcome Back, User</h1>

      <div className="flex flex-row p-3 justify-between">
        <div className="flex flex-col border-1 border-gray-700 rounded-xl p-5 h-1/2 w-1/2 h-[600px] ">
          <div className="p-2"></div>
          <div className="pl-5 pr-5">
            <TypewriterEffectSmoothDemo />
          </div>
          <SatelliteMap />
        </div>
        <div className="border-1 border-gray-700 opacity-50"></div>
        <FloatComponent />
      </div>
    </div>
  );
};

export default Dashboard;
