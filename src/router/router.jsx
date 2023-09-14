import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Layout from "../layouts/Layout";
import CityDetails from "../pages/CityDetails";
import Itineraries from "../components/Itineraries/Itineraries";
import ItineraryCard from "../components/ItineraryCard/ItineraryCard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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
            },
            {
                path: '/itineraries',
                element: <Itineraries />
            },
            {
                path: '/itineraries/:id',
                element: <ItineraryCard />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },            


        ]
    },
    

])

export default router