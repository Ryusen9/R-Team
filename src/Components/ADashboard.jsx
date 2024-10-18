import { Bell, Calendar, Folders, Mails, ShoppingBag } from "lucide-react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";

const ADashborad = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-2xl">
          <span className="flex items-center gap-2 text-zinc-400">
            <LuLayoutDashboard />
            <span className="text-sm  md:text-base font-semibold">Dashboard</span>
          </span>
          <span className="text-zinc-500">
            <HiAdjustmentsHorizontal />
          </span>
        </div>
        <div>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="text-xs md:text-base flex gap-2 items-center text-zinc-300 py-2 px-3 rounded-xl hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer font-medium">
              {" "}
              <Folders size={"20px"} /> My Project Task
            </li>
            <li className="text-xs md:text-base flex gap-2 items-center text-zinc-300 py-2 px-3 rounded-xl hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer font-medium">
              {" "}
              <Calendar size={"20px"} /> Calender
            </li>
            <li className="text-xs md:text-base flex gap-2 items-center text-zinc-300 py-2 px-3 rounded-xl hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer font-medium">
              {" "}
              <Mails size={"20px"} /> Mail
            </li>
            <li className="text-xs md:text-base flex gap-2 items-center text-zinc-300 py-2 px-3 rounded-xl hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer font-medium">
              {" "}
              <Bell size={"20px"} /> Notifications
            </li>
            <li className="text-xs md:text-base flex gap-2 items-center text-zinc-300 py-2 px-3 rounded-xl hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer font-medium">
              {" "}
              <ShoppingBag size={"20px"} /> Sales
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ADashborad;
