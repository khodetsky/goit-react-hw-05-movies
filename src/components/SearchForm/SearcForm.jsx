import { Formik} from "formik";
import {SearchBtn, StyledInput, StyledForm} from './SearcForm.styled'

export const SearchForm = ({ submit }) => {
    return (
        <Formik initialValues={{searchValue: ''}} onSubmit={submit}>
            <StyledForm>
                <StyledInput
                    name="searchValue"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <SearchBtn type="submit">
                    Search
                </SearchBtn>
            </StyledForm>
        </Formik>
    )
}