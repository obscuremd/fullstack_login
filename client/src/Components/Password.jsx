import { Link } from "react-router-dom"
import avatar from '../assets/profile.png'
import toast, {Toaster} from 'react-hot-toast'
import styles from '../Styles/Username.module.css'
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import ActiveState from "../States/AuthActiveState"
import { Usernames } from "../States/RegisterationData"
import axios from "axios"

const Password = () => {

  const [active, setActive] = useRecoilState(ActiveState)



  const handleSubmit=async(e)=>{
    e.preventDefault()
    


    
  }

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}/>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">Explore More by connectiing with us</span>
          </div>

          <div action="" className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="" className={styles.profile_img} />
            </div>
            
            <div className="textbox flex flex-col items-center gap-6">
              
              <button onClick={handleSubmit} className={styles.btn}>Sign up</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">Forgot Password? <Link to="/Recovery" className="text-red-500">Recover Now</Link></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Password
