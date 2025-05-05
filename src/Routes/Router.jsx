import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import About from "../components/About";
import Career from "../components/Career";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";

const router =createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                path:'',
                Component:Home
            },
            {
                path:'/category/:id',
                Component:CategoryNews,
                loader: ()=> fetch("/news.json")
            }
        ]
    },

    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[{
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        }

        ]
    },
    {
        path:'/about',
        Component:About
    },
    {
        path:'/news-details/:id',
        element:<NewsDetails></NewsDetails>,
        loader: ()=> fetch("/news.json")
    },
    {
        path:'/career',
        Component:Career
    },
    {
        path:'*',
        element:<h2>error 404 </h2>
    }
])

export default router