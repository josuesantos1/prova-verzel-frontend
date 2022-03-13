import styled from 'styled-components';
import { IBox } from '../types/Box';

export const App = styled.main`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 100vh;
    width: 88vw;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    height: 25vh;
    width: 15vw;

    padding: 0.5rem;

    border: 1px solid #777;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem #777;

    * {
        margin: 0.1rem;
    }

    img {
        height: 10vh;
        width: 10vw;
        border-radius: 0.5rem;
    }

    h1 {
        font-size: 2vh;
        font-weight: bold;
    }

    p {
        font-size: 2vh;
        color: #777;
    }

    strong {
        font-size: 3vh;
        font-weight: bold;
        color: #76f;
    }

    :hover {
        cursor: pointer;
    }
`;

export const CardAdmin = styled.div`
    display: flex;
    flex-direction: column;

    height: 45vh;
    width: 15vw;

    padding: 0.5rem;

    border: 1px solid #777;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem #777;

    * {
        margin: 0.1rem;
    }

    img {
        height: 10vh;
        width: 10vw;
        border-radius: 0.5rem;
    }

    h1, p, strong {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h1 {
        font-size: 2vh;
        font-weight: bold;
    }

    p {
        font-size: 2vh;
        color: #777;
    }

    strong {
        font-size: 3vh;
        font-weight: bold;
        color: #76f;
    }
`;

export const GridView = styled.div`
    display: grid;
    column-gap: 50px;
    grid-template-columns: auto auto auto;

    height: 100vh;
    width: 50vw;

    & > * {
        margin: 1rem;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 10vh;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    li {
        list-style: none;
        padding: 0.5rem;
    }
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;

    height: 90vh;
    width: 15vw;
`;

export const Box = styled.div<IBox>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'center'};

    height: ${props => props.height};
    width: ${props => props.width};
`;