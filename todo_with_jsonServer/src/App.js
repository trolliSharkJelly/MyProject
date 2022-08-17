import Todos from "./component/Todos";
import TodoInsert from "./component/TodoInsert";
import styled from "styled-components";
import { useState } from "react";

const TodoContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;

  h1 {
    text-align: center;
  }
`;

function App() {
  const [isUpload, setIsUpload] = useState(false);

  return (
    <TodoContainer>
      <h1>Todo</h1>
      <TodoInsert setIsUpload={setIsUpload} />
      <Todos isUpload={isUpload} setIsUpload={setIsUpload} />
    </TodoContainer>
  );
}

export default App;
