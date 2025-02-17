import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route 
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/register/Login'

import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/login' element={<Login />} />
  </Route>
))

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
