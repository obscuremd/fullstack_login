import { Link } from "react-router-dom"
import avatar from '../assets/profile.png'
import toast, {Toaster} from 'react-hot-toast'
import styles from '../Styles/Username.module.css'
import { useState } from "react"
import axios from 'axios'
import { useRecoilState } from "recoil"
import ActiveState from "../States/AuthActiveState"
import { URL } from "../Exports"


const Register = () => {

  const [active, setActive] = useRecoilState(ActiveState)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const trimmedUsername = username.trim(); // Trim the input value

    trimmedUsername === '' && toast.error('Invalid username');
    
    try {
      
      const req = await axios.post(`${URL}users/register`,{name:trimmedUsername, email:email, password:password})

      req.status === 201 && toast.success('Successfully registered')
      console.log(req);
      setTimeout(()=>setActive(0),2000)
        
    } catch (error) {
      toast.error(`error: ${error.message}`)
    }
  }


  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}/>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{padding:20, height:'98%'}}>
          
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">we're happy to seee you</span>
          </div>

          <div action="" className="py-1">
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={avatar} alt="" className={styles.profile_img} />
              </label>
            </div>
            
              <input type="file" id="profile" className="hidden" />

            <div className="textbox flex flex-col items-center gap-6">
              <input onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder="username" className={styles.textbox} />
              <input onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder="email" className={styles.textbox} />
              <input onChange={(e)=>setPassword(e.target.value)}  type="text" placeholder="password" className={styles.textbox} />
              <button onClick={handleSubmit} className={styles.btn}>Sign in</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">Already a member? <button onClick={()=>setActive(0)} className="text-red-500">Log in</button></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register
