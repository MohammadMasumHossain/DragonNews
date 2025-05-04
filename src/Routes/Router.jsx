import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import About from "../components/About";
import Career from "../components/Career";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        path:'/about',
        Component:About
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