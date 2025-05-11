import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Watch from "./Components/Watch";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
