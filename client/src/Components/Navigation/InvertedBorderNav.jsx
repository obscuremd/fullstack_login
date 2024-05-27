import { motion } from "framer-motion"
import { HomeSimple, ProfileCircle, Search } from "iconoir-react"
import { useState } from "react"



const InvertedBorderNav = () => {
    
    const [active, setActive] = useState(0)
    
    const Button=({icon, name, index})=>(
        <button onClick={()=>setActive(index)} className="relative flex flex-col items-center justify-center">
        <motion.button 
            initial={active ==index && {y:30, opacity:0}} 
            animate={{y:0 , opacity:1}}
            className={active == index && "active text-sm"}>
                {icon}
        </motion.button>
          <p className={active == index && 'relative top-[100%]'}>{name}</p>
        </button>
      )

  return (
    <div className="bg-[#f4f4f4] p-4 flex gap-10 rounded-xl justify-center items-center">
          <Button icon={<HomeSimple/>} name={'Home'} index={0}/>
          <Button icon={<Search/>} name={'Search'} index={1}/>
          <Button icon={<ProfileCircle/>} name={'Profile'} index={2}/>
        </div>
  )
}

export default InvertedBorderNav