import React from "react";
import { Title, Quote, Advice, Container, Image } from "./style";

interface CardProps {
    title: string;
    advice: number;
}

export const Card = ({ title, advice }: CardProps) => {
    
    let text: string, textAdvice: string;

    if (advice === 0) {
        text = title;
        textAdvice = 'Welcome to the random advice generator!';
    }
    else {
        text = '"'+title+'"';
        textAdvice = 'Advice #'+advice;
    }

    return(
        <Container>
            <Quote>
                <Advice>{textAdvice}</Advice>
            </Quote>
            <Title>
                {text}
            </Title> 
            <Image>
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>     
            </Image>
        </Container>
    )
}