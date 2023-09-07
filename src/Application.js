import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes, { authRoutes } from './Routes/routes';
import Loader from './components/common/Loader/Loader';
import AuthLayout from './components/layouts/AuthLayout/AuthLayout';
import HomeLayout from './components/layouts/HomeLayout/HomeLayout';

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                ...routes
            ]
        },
        {
            path: "auth",
            element: <AuthLayout />,
            children: [
                ...authRoutes
            ]
        },
        
    ]);
    return (
        <>
            <Suspense fallback={<Loader />}>
                <RouterProvider router={router} />
            </Suspense>
        </>
    )
}

export default Application
