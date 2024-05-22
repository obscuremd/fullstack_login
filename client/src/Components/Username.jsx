import avatar from '../assets/profile.png'
import toast, {Toaster} from 'react-hot-toast'
import styles from '../Styles/Username.module.css'
import { useState } from "react"
import { useRecoilState } from "recoil"
import ActiveState from "../States/AuthActiveState"
import axios from "axios"
import { URL } from '../Exports'


const Username = () => {

  const [active, setActive] = useRecoilState(ActiveState)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  // const handleSubmit=async(e)=>{
  //   e.preventDefault()
  //   const trimmedPassword = password.trim(); // Trim the input value
  //   const characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  //   const trimmedUsername = username.trim(); // Trim the input value

  //   if (trimmedUsername === '') {
  //     toast.error('Invalid username');
  //   }else if (trimmedPassword === '') {
  //     toast.error('Invalid Password');
  //   }else if(trimmedPassword.length < 4){
  //     toast.error('password must be at least 4 characters')
  //   } else if (!characters.test(trimmedPassword)){
  //     toast.error('must include special characters')
  //   }
  //   else {
  //     try {
  //       const req = await axios.get('http://localhost:8800/api/users/login',{name:trimmedUsername, password:trimmedPassword})

  //       if (req.status === 200){ 
  //         toast.success('Go ahead');
  //         console.log(req);
  //         setTimeout(()=>{setActive(3)},2000)
  //       }else{
  //         toast.error('invalid login')
  //       }
        
  //     } catch (error) {
  //       console.log(error);
  //       toast.error(error)
  //     }
      
  //   }
  // }
  const handleSubmit=async(e)=>{
    e.preventDefault()
      try {
        const req = await axios.get(`${URL}users/login`,{name:username, password:password})
        console.log(req);
      } catch (error) {
        console.log(error);
        toast.error('error')
      }
  }

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}/>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{padding:20, height:'90%'}}>
          
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">Explore More by connecting with us</span>
          </div>

          <div action="" className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="" className={styles.profile_img} />
            </div>
            
            <div className="textbox flex flex-col items-center gap-6">
              <input onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder="username" className={styles.textbox} />
              <input onChange={(e)=>setPassword(e.target.value)}  type="text" placeholder="password" className={styles.textbox} />
              <button onClick={handleSubmit} className={styles.btn}>Lets go</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">Not a member? <button onClick={()=>setActive(2)} className="text-red-500">Register</button></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Username
