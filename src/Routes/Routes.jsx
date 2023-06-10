import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Skeleton/Main";
import Home from "../pages/Home/Home";
import Dashboard from "../Skeleton/Dashboard";
import ManageClass from "../pages/AdminDashboard/ManageClass";
import ManageUsers from "../pages/AdminDashboard/ManageUsers";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../pages/AdminDashboard/AdminHome";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "instructors",
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'login',
          element: <Login></Login>

        },
        {
          path: '/register',
          element: <Registration></Registration>
        }
    ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // /admin routes
        {
          path: "allusers",
          element: <ManageUsers></ManageUsers>
        },
        {
          path: "allclass",
          element: <ManageClass></ManageClass>
        },
       
      ]
    },
  ]);