import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
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