import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Skeleton/Main";
import Home from "../pages/Home/Home";
import AdminDashboard from "../Skeleton/AdminDashboard";
import ManageClass from "../pages/AdminDashboard/ManageClass";
import ManageUsers from "../pages/AdminDashboard/ManageUsers";


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
      path: "admin",
      element: <AdminDashboard></AdminDashboard>,
      children: [
        {
          path: "class",
          element: <ManageClass></ManageClass>
        },
        {
          path: "users",
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);