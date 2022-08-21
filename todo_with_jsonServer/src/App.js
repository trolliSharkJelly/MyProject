import Todos from "./component/Todos";
import TodoInsert from "./component/TodoInsert";
import styled from "styled-components";

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
  return (
    <TodoContainer>
      <h1>Todo</h1>
      <TodoInsert />
      <Todos />
    </TodoContainer>
  );
}

export default App;
