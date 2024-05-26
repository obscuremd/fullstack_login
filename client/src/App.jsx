import { BrowserRouter} from 'react-router-dom'
import Exports from './Exports'
import { Suspense } from 'react'

const App = () => {

  const isLoggedIn = window.localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
          {isLoggedIn 
            ?<Exports.Navigation/>
            :<Exports.Auth/>
          }
      </Suspense>
    </BrowserRouter>
  )
}

export default App
