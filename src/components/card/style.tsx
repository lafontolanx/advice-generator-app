import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--dark-grayish-blue); 
    border-radius: 10px;
    height: 300px;
    width: 500px;
    padding: 0 1rem 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Quote = styled.div`
    padding-top: 20px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const Advice = styled.p`
    font-size: 10px;
    color: var(--green);
    letter-spacing: 2px;
    margin-top: 40px;
`

export const Title = styled.p`
    color: var(--white);
    font-size: 24px;
    text-align: center;
`

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
