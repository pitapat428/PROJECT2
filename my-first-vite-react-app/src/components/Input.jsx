import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const handleSubmit = () => {
    if (!title || !contents) return;
    const newTodo = {
      id: nanoid(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <InputContainer>
      <div>
        <StLabel>제목</StLabel>
        <StInputBox type="text" value={title} onChange={handleTitleChange} />
        <StLabel>내용</StLabel>
        <StInputBox
          type="text"
          value={contents}
          onChange={handleContentsChange}
        />
      </div>
      <StButton onClick={handleSubmit}>추가하기</StButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: #e8e8e8;
  border-radius: 10px;
`;

const StLabel = styled.label`
  font-weight: bold;
`;

const StInputBox = styled.input`
  width: 200px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 30px 5px 30px;
  color: #fff;
  border-radius: 10px;
  background-color: #017175;
`;

export default Input;
