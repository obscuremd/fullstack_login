import { useState } from "react"
import New_collections from "../assets/new_collections"
import '../Styles/Global.css'
import { HomeSimple, ProfileCircle, Search} from 'iconoir-react'
import {motion} from 'framer-motion'


const HomePage = () => {

  const [active, setActive] = useState(0)

  const [image, setImage]= useState('')
  const [name, setName]= useState('')

  const [collection, setCollection]= useState(New_collections)

  const handleSubmit=()=>{
    const data ={image, name}
    setCollection([...collection, data])

    setImage('')
    setName('')
  }

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
    <div className="container flex flex-col justify-center items-center h-screen gap-10">
      
      <div className="card">
        <div className="box">
          <img src={New_collections[0].image} className="w-full h-full rounded-[15px] object-cover object-right-top" alt="" />
        </div>
        <div className="box">
          
        </div>
        <img src={New_collections[0].image} className="circle"/>
      </div>

      <div className="bg-[#f4f4f4] p-4 flex gap-10 rounded-xl justify-center items-center">
        <Button icon={<HomeSimple/>} name={'Home'} index={0}/>
        <Button icon={<Search/>} name={'Search'} index={1}/>
        <Button icon={<ProfileCircle/>} name={'Profile'} index={2}/>
      </div>

      
    </div>
  )
}

export default HomePage
