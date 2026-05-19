import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browser from "./components/Browser";

function App() {
  const routeConfig = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);

  return <RouterProvider router={routeConfig} />;
}

export default App;
