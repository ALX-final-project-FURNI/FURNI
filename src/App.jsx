import React from 'react';
// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './furni/components/Layout';
import Home from './furni/components/Home';
import Products from './furni/Products/Products';
import Navbar from './furni/components/Navbar';
import Cart from './furni/Context/Cart';
import PropTypes from 'prop-types';

function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <p>{error.message}</p>
    </div>
  );
}

ErrorBoundary.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "Cart",
        element: <Cart />
      }

    ],
  },
]);

function App() {
  console.log('Router configuration:', browserRouter);
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;