import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {StyledLink, StyledHeader, LoadingStyled}  from './SharedLayout.styled'

const SharedLayout = () => {
    return (
        <>
        <StyledHeader>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </nav>
        </StyledHeader>
        <Suspense fallback={<LoadingStyled>Loading...</LoadingStyled>}>
            <Outlet />
        </Suspense>
        </>

    )
}

export default SharedLayout;