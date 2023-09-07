import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout/HomeLayout';
import routes from './Routes/routes';
import Loader from './components/common/Loader/Loader';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            errorElement: <ErrorPage />,
            children: [
                ...routes
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
