import { Link } from "react-router-dom"
import avatar from '../assets/profile.png'
import toast, {Toaster} from 'react-hot-toast'
import styles from '../Styles/Username.module.css'
import { useState } from "react"

const Reset = () => {

  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const trimmedPassword = password.trim(); // Trim the input value
    const characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


    if (trimmedPassword === '') {
      toast.error('Invalid Password');
    }else if(trimmedPassword.length < 4){
      toast.error('password must be at least 4 characters')
    } else if (!characters.test(trimmedPassword)){
      toast.error('must include special characters')
    }else if(trimmedPassword !== passwordAgain){
      toast.error('password must be similar')
    }
    else {
      toast.success('Go ahead');
      console.log(trimmedPassword);
    }
  }

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}/>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">Enter New password</span>
          </div>

          <div action="" className="py-1 pt-20">
            <div className="textbox flex flex-col items-center gap-6">
              <span className="py-4 text-sm w-2/3 text-center text-gray-500">please enter 6-digit OTP to get your Email Address</span>
              <input onChange={(e)=>setPassword(e.target.value)}  type="text" placeholder="New Password" className={styles.textbox} />
              <input onChange={(e)=>setPasswordAgain(e.target.value)}  type="text" placeholder="Repeat Password" className={styles.textbox} />
              <button onClick={handleSubmit} className={styles.btn}>Reset</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">Cant get OTP? <button  className="text-red-500">Resend</button></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reset
