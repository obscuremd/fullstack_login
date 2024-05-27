import New_collections from '../../assets/new_collections'

const ImageCutout = () => {
  return (
    <div className="card">
          <div className="box">
            <img src={New_collections[0].image} className="w-full h-full rounded-[15px] object-cover object-right-top" alt="" />
          </div>
          <div className="box">
            
          </div>
          <img src={New_collections[0].image} className="circle"/>
        </div>
  )
}

export default ImageCutout