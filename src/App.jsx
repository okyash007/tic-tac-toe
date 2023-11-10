import { useState } from "react";
import Body from "./Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Play from "./play/Play";
import { Provider } from "react-redux";
import store from "./store/store";

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
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
