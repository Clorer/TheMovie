import Film from "./pages/Film";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResultPage from "./pages/SearchResultPage";
import { filmsListContext } from "./context";

const filmsList = {
  'watched' : [`http://www.omdbapi.com/?i=tt0371746&apikey=d3d7f8c0`], 
  'watchlist' : [],
  'suggest' : [],
}

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
    <filmsListContext.Provider value={filmsList}>
      <RouterProvider router={router} />
    </filmsListContext.Provider>
    </>
  )
}

export default App
