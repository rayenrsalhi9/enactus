import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route 
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './components/notFound/NotFound'

import SignUp, 
{action as SignupAction} from './pages/register/signup/SignUp'
import Login, 
{ action as loginAction }from './pages/register/login/Login'

import Profile, 
{ loader as profileLoader } from './pages/profile/Profile'
import Edit, { action as editAction } from './pages/edit/Edit'

import Plastic, 
{ loader as plasticLoader} from './pages/plastic/Plastic'
import NewPost, 
{ action as newPostAction, loader as newPostLoader} from './pages/plastic/new-post/NewPost'
import PostDetails,
{ loader as detailsLoader } from './pages/plastic/postDetails/PostDetails'

import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route 
      path='signup' 
      element={<SignUp />} 
      action={SignupAction}
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
    <Route 
      path='editProfile'
      element={<Edit />}
      loader={profileLoader}
      action={editAction}
    />
    <Route path='about' element={<About />} />
    <Route 
      path='plastic' 
      element={<Plastic />}
      loader={plasticLoader}
    />
    <Route 
      path='plastic/:id'
      element={<PostDetails />}
      loader={detailsLoader}
    />
    <Route 
      path='newPost'
      element={<NewPost />}
      action={newPostAction}
      loader={newPostLoader}
    />
    <Route path='*'element={<NotFound />} /> 
  </Route>
))

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
