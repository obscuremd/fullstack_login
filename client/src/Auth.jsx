import Exports from './Exports'
import { useRecoilValue } from 'recoil'
import ActiveState from './States/AuthActiveState'


const Auth = () => {

  const isActive = useRecoilValue(ActiveState)

  return (
    <div>
      {isActive=== 0 && <Exports.Username/>}
      {isActive=== 1 && <Exports.Password/>}
      {isActive=== 2 && <Exports.Register/> }
      {isActive=== 3 && <Exports.Recovery/>}
      {isActive=== 4 && <Exports.Reset/>}
      {isActive=== 5 && <Exports.PageNotFound/>}
    </div>
  )
}

export default Auth
