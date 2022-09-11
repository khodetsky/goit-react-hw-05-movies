import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import  Movies  from '../pages/Movies/Movie';
import  Home  from '../pages/Home/Home';
import SharedLayout  from './SharedLayout/SharedLayout';
import  ProductDetails  from './ProductDetails/ProductDetails';


// const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
// const IMG_FILE_SIZE = 'w500';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<ProductDetails />} />
        </Route>
      </Routes>
      <GlobalStyle/>
    </>
  );
};
