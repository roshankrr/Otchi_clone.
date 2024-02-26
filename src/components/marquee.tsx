import {motion} from 'framer-motion'
export default function Marquee(){
    return (
        <div className="greendibba h-80 bg-green-800 flex items-center overflow-hidden ">
            <div className=" flex gap-7 h-60 whitespace-nowrap items-center justify-center border-t-[2px] border-b-[2px] border-slate-300/30 ">
            <h1 className=" capitalize text-[20vw]">we are ochi</h1>
            <h1 className=" capitalize text-[20vw]">we are ochi</h1>
            <h1 className=" capitalize text-[20vw]">we are ochi</h1>
            </div>
            <motion.div>
                <h2>hello</h2>
            </motion.div>
            
        </div>
    )
}
