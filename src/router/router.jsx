import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Cities',
                element: <Cities />
            }
        ]
    },
    

])

export default router