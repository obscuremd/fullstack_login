import { Route, Routes } from "react-router-dom"
import Exports from "./Exports"

const Navigation = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <Exports.HomePage/>
      <Routes>
        <Route path="/" element={<Exports.InvertedBorderNav/>}/>
        <Route path="/Profile" element={<Exports.Profile/>}/>
        <Route path="/ImageCutout" element={<Exports.ImageCutout/>}/>
        <Route path="/ImageUpload" element={<Exports.ImageUpload/>}/>
      </Routes>
    </div>
  )
}

export default Navigation
