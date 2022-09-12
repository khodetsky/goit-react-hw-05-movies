import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import  Movies  from '../pages/Movies/Movie';
import  Home  from '../pages/Home/Home';
import SharedLayout  from './SharedLayout/SharedLayout';
import ProductDetails from './ProductDetails/ProductDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<ProductDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle/>
    </>
  );
};
