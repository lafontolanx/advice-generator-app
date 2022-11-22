import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--grayish-blue); 
    border-radius: 10px;
    height: 200px;
    width: 600px;
    padding: 0 1rem 0 1rem;

    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Quote = styled.div`
    padding-top: 20px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const Advice = styled.p`
    font-size: 15px;
    color: var(--green);
`

export const Title = styled.p`
    color: var(--white);
    font-size: 24px;
    text-align: center;
`
