import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <TitleBox>
      <div>My Todo List</div>
      <div>React</div>
    </TitleBox>
  );
};

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border: 1px solid #e8e8e8;
`;

export default Header;
