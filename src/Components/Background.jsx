import Asidebar from "./Asidebar"
import DashboradHome from "./DashboradHome"
import Navbar from "./Navbar/Navbar"
const Background = () => {
    
  return (
    <>
    <div className="h-screen w-full bg-zinc-900 relative">
      <Navbar/>
      <div className="z-[999]">
      <DashboradHome/>
        <Asidebar/>
      </div>
    </div>
    </>
  )
}

export default Background