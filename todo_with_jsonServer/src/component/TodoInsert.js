import { useState } from "react";
import { useDispatch } from "react-redux";
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

const TodoInsert = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    dispatch({ type: "uploadBefore" });

    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ content: value }),
    }).then((res) => {
      console.log(res.status);
      setValue("");
      dispatch({ type: "uploadAfter" });
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
