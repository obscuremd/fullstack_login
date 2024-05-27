import axios from 'axios'
import { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast, {Toaster} from 'react-hot-toast'
import { app } from '../../firebaseconfig';
import { jwtDecode } from "jwt-decode";

const ImageUpload = () => {

    const token = window.localStorage.getItem('token')

    const userId = jwtDecode(token).userId

    // console.log(userId);

    const storage = getStorage()
    const [image, setImage]= useState()
    const [gallery, setGallery] = useState([])
    const [imageUrl, setImageUrl] = useState()
    const [description, setDescription] = useState()

    const getImages =async()=>{
      const req = await axios.get('http://localhost:8800/api/post/')
      setGallery(req.data)
      console.log(req.data);
    }
  
    const upload =async()=>{

      !image && toast.error('image not found')

      const ImageRef = ref(storage,'test/images')

      try {
        const upload = await uploadBytes(ImageRef, image)
        const url = await getDownloadURL(upload.ref)
        setImageUrl(url)
        console.log(imageUrl);
      } catch (error) {
        toast.error('error: ', JSON.stringify(error))
      }

      if(!imageUrl){
        toast.error('please wait for image upload')
      }

      else if(!description){ 
        toast.error('please input a description')
      }

      else{
        await axios.post(`http://localhost:8800/api/post/${userId}`,{image:imageUrl, description:description})
        getImages()
      }


    }
  
   
  
    useEffect(()=>{getImages()},[])

  return (
    <div className="flex flex-col gap-6">
        
        <Toaster/>

        <div>
          <img src={image ? URL.createObjectURL(image) : null} alt="" className="w-32 h-32" />
          <input type="file" accept="image/*" onChange={(e) => setImage((e.target.files[0]))}/>
          <input type="text" onChange={(e)=>setDescription(e.target.value)} />
          <button onClick={upload}>upload</button>
        </div>

        {gallery.map((item,index)=>(
          <div key={index} className='flex'>
            <img className="w-20 h-20" src={item.image} alt="" />
            <p>{item.description}</p>
          </div>
        ))}

        
      </div>
  )
}

export default ImageUpload