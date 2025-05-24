import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, About, Login, Register, ErrorPage, HomeLayout, Products, Cart, SingleProduct, PaymentSuccess } from './components/index.js'

import { action as registerAction } from './components/Register.jsx'
import { action as loginAction } from './components/Login.jsx'
import ProtectedRoute from './utils/ProtectedRoute.js'
import { Loader as ProductLoader } from './components/Products.jsx'
import { Loader as SingleProductLoader } from './components/SingleProduct.jsx'


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: ProtectedRoute
        },
        {
          path: '/products',
          element: <Products />,
          loader: ProductLoader
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/cart',
          element: <Cart />,
          loader: ProtectedRoute
        },
        {
          path: '/single-product/:id',
          element: <SingleProduct />,
          loader: SingleProductLoader
        },
        {
          path: '/login',
          action: loginAction,
          element: <Login />,
        },
        {
          path: '/register',
          action: registerAction,
          element: <Register />,
        },
        {
          path: '/paymentsuccess',
          element: <PaymentSuccess />,
        }
      ]
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
