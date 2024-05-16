import React from "react";
import styled from "styled-components";

const TodoList = ({ todos, setTodos, listIsDone }) => {
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };

  return (
    <ListContainer>
      <h2>{listIsDone ? "Done..!🎉" : "Working...🔥"}</h2>
      {todos.map((todo) => {
        if (todo.isDone === listIsDone) {
          return (
            <TodoCard key={todo.id}>
              <StTitle>{todo.title}</StTitle>
              <StContents>{todo.contents}</StContents>
              <ButtonContainer>
                <StButton onClick={() => handleDelete(todo.id)}>삭제하기</StButton>
                <StButton onClick={() => handleToggle(todo.id)}>
                  {todo.isDone ? "취소" : "완료"}
                </StButton>
              </ButtonContainer>
            </TodoCard>
          );
        }
        return null;
      })}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 20px;
`;

const TodoCard = styled.div`
  width: 330px;
  height: 180px;
  border: 5px solid #017175;
  border-radius: 10px;
`;

const StTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 30px;
`;

const StContents = styled.div`
  font-size: 18px;
  margin: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 8px 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isDone ? "red" : "green")};
  color: #fff;
`;

export default TodoList;
