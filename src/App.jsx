import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Watch from "./Components/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Body />
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
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
