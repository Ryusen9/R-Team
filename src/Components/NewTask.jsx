import { PlusIcon } from "lucide-react"

const NewTask = () => {
  return (
    <div className="flex flex-col w-full items-center justify-between bg-zinc-600/40 shadow-xl shadow-zinc-900 py-4 rounded-lg">
        <button className="flex items-center justify-center bg-gradient-to-t from-blue-500 to-blue-400 rounded-full h-10 w-10 md:h-14 md:w-14 mx-auto shadow-blue-400 shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_10px_rgba(59,130,246,1) cursor-pointer"> <PlusIcon/> </button>
        <p className="text-sm md:text-lg text-zinc-200 mt-4">Create a new Task</p>
        <p className="text-zinc-400 text-xs md:text-base">Or use <span className="text-orange-400/70 font-medium hover:underline cursor-pointer">invite link</span></p>
    </div>
  )
}

export default NewTask