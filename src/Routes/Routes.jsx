import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Faq from "../Pages/Faq/Faq";
import Team from "../Pages/Team/Team";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`https://vehica-server.vercel.app/api/products`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/api/products/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/brandProducts",
        element: <BrandProducts />,
      },
      {
        path: "/api/singleProduct/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://vehica-server.vercel.app/api/singleProduct/${params.id}`
          ),
      },

      {
        path: "/api/products/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://vehica-server.vercel.app/api/singleProduct/${params.id}`
          ),
      },
      {
        path: "/api/products/:brandName",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(
            `https://vehica-server.vercel.app/api/products/${params.brandName}`
          ),
      },

      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/team",
        element: <Team />,
      },

      {
        path: "/faq",
        element: <Faq />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
