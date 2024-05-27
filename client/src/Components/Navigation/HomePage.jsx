import { Link } from "react-router-dom"

const HomePage = () => {

  const logout=()=>{
    window.localStorage.removeItem('token')
    window.location.reload()
  }

  

  return (
    <div className="container flex justify-center items-center gap-10">

      <Link to={'/'}>home</Link>
      <Link to={'/Profile'}>Profile</Link>
      <Link to={'/ImageCutout'}>ImageCutout</Link>
      <Link to={'/ImageUpload'}>ImageUpload</Link>

      {/* first container */}
      <button onClick={logout} className="p-2 bg-slate-800 text-white">log-out</button>
    </div>
  )
}

export default HomePage
