import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonChange = styled.button`
    position: absolute;

    top: calc(50% + 120px);

    background-color: var(--green);
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    :hover {
        box-shadow: 0 0 15px var(--green);
    }
`