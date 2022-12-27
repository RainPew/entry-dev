import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import AnimalsList from './pages/AnimalsList'



export const routers = [
    {path: '/', element:<Home/>},
    {path: '/login', element:<Login/>},
    {path: '/signin', element:<SignUp/>},
    {path: '/animals', element:<AnimalsList/>},
]