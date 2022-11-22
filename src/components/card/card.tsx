import React from "react";
import { Container, Title, Quote } from "./style";

interface CardProps {
    title: string;
}

export const Card = (props: CardProps) => {
    
    return(
        <Container>
            <Quote>
                <Title>{props.title}</Title>
            </Quote>
        </Container>
    )
}