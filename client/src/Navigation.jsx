import { Route, Routes } from "react-router-dom"
import Exports from "./Exports"

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Exports.HomePage/>}/>
      <Route path="/Profile" element={<Exports.Profile/>}/>
    </Routes>
  )
}

export default Navigation
