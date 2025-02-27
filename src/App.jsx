import Film from "./pages/Film";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResultPage from "./pages/SearchResultPage";
import { filmsListContext } from "./context";

let filmsList = {
  'watched': [`http://www.omdbapi.com/?i=tt0371746&apikey=d3d7f8c0`],
  'watchlist': [],
  'suggest': ['tt1228705', 'tt0499549', 'tt0120737', 'tt0114709', 'tt0076759', 'tt0113497', 'tt0109830', 'tt4154756', 'tt3450958', 'tt0060196', 'tt2179136', 'tt0169547' ]
}

function App() {
  filmsList = JSON.parse(localStorage.getItem('filmslist')) || filmsList;
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
