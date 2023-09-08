import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout/HomeLayout';
import routes, { authRoutes } from './Routes/routes';
import Loader from './components/common/Loader/Loader';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const Application = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            errorElement: <ErrorPage />,
            children: [
                ...routes
            ],
        },
        
        {
            path: "*",
            element: <NotFoundPage />
        }
    ]);
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <RouterProvider fallbackElement={<ErrorPage />} router={router} />
            </Suspense>
        </>
    )
}

export default Application
