import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Skeleton/Main";
import Home from "../pages/Home/Home";
import AdminDashboard from "../Skeleton/AdminDashboard";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    
    children:[
        {
            path: "/",
            element: <Home></Home>
        }
    ]
    },
    {
      path: "/admin/home",
      element: <AdminDashboard></AdminDashboard>
    }
  ]);