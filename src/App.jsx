import Search from "./Components/Seacrh"
import Film from "./pages/Film";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SearchResultPage from "./pages/SearchResultPage";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/films/:filmId',
      element: <Film />,
    },
    {
      path: '/:searchTerm',
      element: <SearchResultPage />,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
