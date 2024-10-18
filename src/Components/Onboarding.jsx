import { ArrowDownUp, HomeIcon, Pencil, UserRound, ChartPie, Settings, Lightbulb } from "lucide-react"

const Onboarding = () => {
  return (
    <>
    <div className="flex w-full justify-between items-center">
        <p className="text-zinc-500">Onboarding: <span className="text-zinc-300">16</span></p>
        <div className="text-zinc-600">
            <Pencil size={"20px"}/>
        </div>
    </div>
    <div className="rounded-xl p-2 mt-3 bg-zinc-600/30">
        <ul className="grid grid-cols-3 md:flex gap-1">
            <li className="hover:bg-zinc-600 mx-auto rounded-xl text-zinc-400 w-9 h-9 flex items-center justify-center cursor-pointer duration-300 hover:transform hover:scale-110 hover:perspective-500"><HomeIcon/></li>
            <li className="hover:bg-zinc-600 mx-auto rounded-xl text-zinc-400 w-9 h-9 flex items-center justify-center cursor-pointer duration-300 hover:transform hover:scale-110 hover:perspective-500"> <ArrowDownUp /> </li>
            <li className="hover:bg-zinc-600 mx-auto rounded-xl text-zinc-400 w-9 h-9 flex items-center justify-center cursor-pointer duration-300 hover:transform hover:scale-110 hover:perspective-500"> <UserRound/> </li>
            <li className="hover:bg-zinc-600 mx-auto rounded-xl text-zinc-400 w-9 h-9 flex items-center justify-center cursor-pointer duration-300 hover:transform hover:scale-110 hover:perspective-500"> <ChartPie /> </li>
            <li className="hover:bg-zinc-600 mx-auto rounded-xl text-zinc-400 w-9 h-9 flex items-center justify-center cursor-pointer duration-300 hover:transform hover:scale-110 hover:perspective-500"> <Settings /> </li>
            <li className="hover:bg-zinc-600 mx-auto rounded-xl text-zinc-400 w-9 h-9 flex items-center justify-center cursor-pointer duration-300 hover:transform hover:scale-110 hover:perspective-500"> <Lightbulb /> </li>
        </ul>
    </div>
    </>
  )
}

export default Onboarding