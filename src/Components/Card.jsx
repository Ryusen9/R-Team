import { motion } from "framer-motion"
import { Upload } from "lucide-react"
import props from "prop-types"
const Card = ({reference}) => {
  return (
    <>
    <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }} className="bg-zinc-600 font-Poppins h-[200px] w-[230px] rounded-lg px-3 py-7">
        <div className="flex flex-col justify-center gap-2 border-l-4 p-2 border-red-400 h-full w-full">
            <p className="text-2xl font-medium text-zinc-300">Task Example</p>
            <div className="bg-zinc-700 w-9 h-9 text-zinc-100 flex items-center justify-center text-sm rounded-2xl"><span>54%</span></div>
            <a href="#" className="text-zinc-400 hover:underline">Learn More</a>
        </div>
    </motion.div>
    <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }} className="bg-zinc-600 font-Poppins h-[200px] w-[230px] rounded-lg px-3 py-7">
        <div className="flex flex-col justify-center gap-2 border-l-4 p-2 border-green-400 h-full w-full">
            <p className="text-2xl font-medium text-zinc-300">Task Example</p>
            <div className="mx-auto"><button className="flex gap-2 bg-gradient-to-t from-blue-600 to-blue-500 px-5 py-2 rounded-lg text-zinc-200"> <Upload/> Upload </button></div>
        </div>
    </motion.div>
    </>
  )
}

Card.propTypes = {
    reference: props.shape({
      top: props.number,
      left: props.number,
      width: props.number,
      height: props.number
    })
}

export default Card