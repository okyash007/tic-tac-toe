import { useState } from "react";
import Body from "./Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Play from "./play/Play";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/play",
          element: <Play />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
