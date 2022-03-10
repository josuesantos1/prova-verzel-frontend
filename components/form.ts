import styled from 'styled-components'

export const Search = styled.input`
    border: 1px solid #ccc;
    border-radius: 0.5rem;

    width: 50vw;
    padding: 1rem;

    color: #76f;

    &:focus {
        outline: none;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    border: 1px solid #ccf;
    border-radius: 0.5rem;

    padding: 0.5rem;

    color: #76f;
    background-color: #ccf;

    font-weight: bold;

    &:hover {
        background-color: #fff;

        box-shadow: 1px 5px 1rem #76f;

        cursor: pointer;
    }
`;

export const Input = styled.input`
    border: 1px solid #76f;
    border-radius: 0.5rem;

    padding: 1rem;
    width: 30vw;

    margin-top: 1rem;

    color: #76f;

    &:focus {
        outline: none;
        font-weight: bold;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    padding: 1rem;
`;
