import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route 
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/home/Home'
import SignUp from './pages/register/SignUp'
import Login, { action as loginAction }from './pages/register/Login'
import Profile, { loader as profileLoader } from './pages/profile/Profile'
import About from './pages/about/About'
import Plastic from './pages/plastic/Plastic'

import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route 
      path='signup' 
      element={<SignUp />} 
    />
    <Route 
      path='login'
      element={<Login />}
      action={loginAction}
    />
    <Route 
      path='profile'
      element={<Profile />}
      loader={profileLoader}
    />
    <Route path='about' element={<About />} />
    <Route path='plastic' element={<Plastic />} />
  </Route>
))

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
