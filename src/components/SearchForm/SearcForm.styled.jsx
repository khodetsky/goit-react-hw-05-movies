import styled from "styled-components";
import { Form, Field } from "formik";

export const SearchBtn = styled.button`
    cursor: pointer;
    margin-left: 20px;
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 10px;

    :hover, :focus {
        background-color: orange;
    }
`;

export const StyledInput = styled(Field)`
    font-size: 18px;
    margin-left: 10px;
    border-radius: 10px;
    padding: 3px 10px;
`;

export const StyledForm = styled(Form)`
    margin-bottom: 20px;
`;