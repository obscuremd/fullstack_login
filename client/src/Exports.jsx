import { lazy } from "react";


const PageNotFound = lazy(()=>import('./Components/PageNotFound'))
const Password = lazy(()=>import('./Components/Password'))
const Profile = lazy(()=>import('./Components/Profile'))
const Recovery = lazy(()=>import('./Components/Recovery'))
const Register = lazy(()=>import('./Components/Register'))
const Reset = lazy(()=>import('./Components/Reset'))
const Username = lazy(()=>import('./Components/Username'))
const HomePage = lazy(()=>import('./Components/HomePage'))

const Navigation = lazy(()=>import('./Navigation'))
const Auth = lazy(()=>import('./Auth'))

const Exports ={
    PageNotFound,
    Password,
    Profile,
    Recovery,
    Register,
    Reset,
    Username,

    HomePage,

    Auth,
    Navigation
}

export const URL = 'https://fullstack-login.onrender.com/api/'

export default Exports