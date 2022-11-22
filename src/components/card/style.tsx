import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Quote = styled.div`
    background-color: var(--grayish-blue); 
    border-radius: 10px;
    padding: 5rem 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Advice = styled.p`
    font-size: 15px;
    color: var(--green);
`

export const Title = styled.p`
    color: var(--white);
    font-size: 28px;
`
