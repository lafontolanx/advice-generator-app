import React from "react";
import { Container, Title, Box } from "./style";

interface CardProps {
    title: string;
}

export const Card = (props: CardProps) => {
    
    return(
        <Container>
            <Box>
                <Title>{props.title}</Title>
            </Box>
        </Container>
    )
}