import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signin from "./pages/signIn";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/signin',
    element: <Signin/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }

]);

export default function App() {
  return (
     <RouterProvider router={router} />
  );
}