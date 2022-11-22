import React from "react";
import { Container, Title, Quote, Advice } from "./style";
//import Divider from '../../assets/images/pattern-divider-desktop.svg';
//<img src={Divider} alt="divider" />

interface CardProps {
    title: string;
    advice: number;
}

export const Card = (props: CardProps) => {
    
    return(
        <Container>
            <Quote>
                <Advice>ADVICE #{props.advice}</Advice>
                <Title>{props.title}</Title>
            </Quote>
        </Container>
    )
}