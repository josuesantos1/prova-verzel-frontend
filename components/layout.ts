import styled from 'styled-components';

export const App = styled.main`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
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
