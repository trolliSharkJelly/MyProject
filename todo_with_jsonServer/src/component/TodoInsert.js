import { useState } from "react";
import styled from "styled-components";

const TodoInsertContainer = styled.div`
  display: flex;
  justify-content: center;

  input,
  button {
    padding: 0.3rem;
  }

  input {
    flex-grow: 1;
  }
`;

const TodoInsert = ({ setIsUpload }) => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    setIsUpload(false);

    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ content: value }),
    }).then((res) => {
      console.log(res.status);
      setValue("");
      setIsUpload(true);
    });
  };

  return (
    <TodoInsertContainer>
      <input onChange={handleInput} value={value} />
      <button onClick={addTodo}>추가</button>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
