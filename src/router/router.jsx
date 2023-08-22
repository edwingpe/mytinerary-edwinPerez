import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Layout from "../layouts/Layout";
import CityDetails from "../pages/CityDetails";

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
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/cities/:id',
                element: <CityDetails />
            }

        ]
    },
    

])

export default router