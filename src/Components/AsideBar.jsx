import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ADashborad from "./ADashboard";
import { Search, ChevronLeft } from "lucide-react";
import Integration from "./Integration";
import Onboarding from "./Onboarding";
import NewTask from "./NewTask";

const Asidebar = () => {
  const asideMenu = () => {
    const menu = document.getElementById('aside-menu')
    menu.classList.toggle('-translate-x-[100%]')
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.classList.toggle('opacity-0');
  }
  return (
    <>
      <aside id="aside-menu" className="-translate-x-[100%] z-[999] h-screen duration-200 w-[50%] md:w-[300px] bg-zinc-800/60 backdrop-blur-md rounded-r-2xl overflow-hidden p-3 md:p-5 font-Poppins">
        <div className="h-full w-full flex flex-col justify-between gap-2">
          {/* Avatar */}
          <div className="flex items-center gap-5 relative">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-200 text-sm md:text-lg">User 1</p>
              <p className="flex  justify-center items-center gap-2 text-green-400 md:text-xs text-[9px]">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Online
              </p>
            </div>
            <button onClick={asideMenu} className="absolute right-0 bg-zinc-900 text-zinc-400 h-full rounded-l-lg hover:transform hover:scale-110 hover:perspective-500 duration-300">
                <ChevronLeft />
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Search here"
              className="py-1 md:py-2 pl-2 pr-[42px] rounded-lg focus:outline-none bg-transparent border border-zinc-600 text-zinc-200 w-full"
            />
            <button className="bg-zinc-500 rounded-full w-7 h-7 md:w-9 md:h-9 text-center flex items-center justify-center absolute right-1 top-[2.5px]">
              <Search className=" w-4 md:w-5"/>
            </button>
          </div>
          <div>
            <ADashborad />
          </div>
          <hr className="border border-zinc-700" />
          <div>
            <Integration />
          </div>
          <hr className="border border-zinc-700 my-2" />
          <div>
            <Onboarding/>
          </div>
          <div>
            <NewTask/>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Asidebar;
