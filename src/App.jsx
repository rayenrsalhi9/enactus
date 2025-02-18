import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route 
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Signup, { action as SignupAction } from './pages/register/Signup'
import Profile from './pages/profile/Profile'
import About from './pages/about/About'
import Plastic from './pages/plastic/Plastic'

import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route 
      path='/login' 
      element={<Signup />} 
      action={SignupAction}
    />
    <Route 
      path='/profile'
      element={<Profile />}
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
