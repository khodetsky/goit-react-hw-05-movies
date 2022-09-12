import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
        <header>
            <nav>
              <NavLink to="/goit-react-hw-05-movies">Home</NavLink>
              <NavLink to="/goit-react-hw-05-movies/movies">Movies</NavLink>
            </nav>
        </header>
        <Outlet />
        </>

    )
}

export default SharedLayout;