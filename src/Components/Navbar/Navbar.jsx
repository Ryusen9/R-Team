import { CalendarDays, LucideLayoutDashboard } from "lucide-react";

const Navbar = () => {
  const handleAsideMenu = () => {
    const menu = document.getElementById('aside-menu')
    menu.classList.toggle('-translate-x-[100%]')
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.classList.toggle('opacity-0');
  }
  const today = new Date();
  const date = today.getDate();
  let month = today.getMonth(); 
  if(month  == 0) {
    month = 'January';
  } else if(month == 1) {
    month = 'February';
  } else if(month == 2) {
    month = 'March';
  } else if(month == 3) {
    month = 'April';
  } else if(month == 4) {
    month = 'May';
  } else if(month == 5) {
    month = 'June';
  } else if(month == 6) {
    month = 'July';
  } else if (month == 7) {
    month = 'August';
  } else if (month == 8) {
    month = 'September';
  } else if (month == 9) {
    month = 'October';
  } else if (month == 10) {
    month = 'November';
  } else if (month == 11) {
    month = 'December';
  }
  return (
    <>
      <div className="w-full flex fixed justify-between items-center top-0 left-0 py-8 px-14 z-0">
        <button id="menu-btn" className="text-zinc-300"> <LucideLayoutDashboard size={"30px"} onClick={handleAsideMenu}/> </button>
        <div><p className="text-2xl font-Poppins font-semibold text-zinc-400 selection:text-purple-400/60">R-Team</p></div>
        <div className="bg-zinc-600/50 py-1 px-2 rounded-lg flex items-center justify-center gap-1">
        <CalendarDays className="text-zinc-500" />
        <p className="text-zinc-300">{date}, {month}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
