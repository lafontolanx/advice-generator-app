import React, { useState } from "react";
import { Card } from './components/card/card'
import { GlobalStyle } from './styles/GlobalStyle'
import api from "./services/api";
import { Button } from "./components/button/button";

function App() {
  const [post, setPost] = useState({
    slip: {
      advice: '',
      id: 0
    }
  });

  function handleNewAdvice() {
    api
      .get("/advice")
      .then((response) => setPost(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <>
      <Card title={post.slip.advice} advice={post.slip.id}/>
      <Button 
        onClick={handleNewAdvice}
      />
      <GlobalStyle />
    </>
  )
}

export default App
