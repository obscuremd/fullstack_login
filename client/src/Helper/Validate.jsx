import toast from "react-hot-toast"

// validate login page username
export const usernameValidate = async(values)=>{
    const errors = usernameVerify({}, values)

    return errors
}


// validate username
const usernameVerify=( error ={}, values)=>{
    if(!values.username){
        error.username = toast.error('username is required')
    }else if(values.username.includes("")){
        error.username = toast.error('invalid username')
    }

    return error
}