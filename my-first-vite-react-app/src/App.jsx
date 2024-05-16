import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, title: "", contents: "", isDone: false },
  ]);

  return (
    <Layout>
      <Container>
        <Header />
        <Input todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
        <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
