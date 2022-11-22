import React, { useEffect, useState } from "react";
import { Card } from './components/card/card'
import { GlobalStyle } from './styles/GlobalStyle'
import api from "./services/api";

function App() {
  const [post, setPost] = useState({
    slip: {
      advice: '',
      id: 0
    }
  });

  useEffect(() => {
    api
      .get("/advice")
      .then((response) => setPost(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  console.log(post.slip.advice);
  

  return (
    <>
      <Card title={post.slip.advice} advice={post.slip.id} />
      <GlobalStyle />
    </>
  )
}

export default App
