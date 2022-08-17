import { useRef, useState } from "react";
import styled from "styled-components";

const TodoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;

  button {
    margin-left: 0.3rem;
  }
`;

const Todo = ({ todo, setIsUpload }) => {
  const [isModify, setIsModify] = useState(false);
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleModify = () => {
    setIsModify(true);
  };

  const updateTodo = (event) => {
    console.log("event : ", event.target.value);
    setIsUpload(false);

    fetch(`http://localhost:3001/todo/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: todo.id, content: value }),
    }).then((res) => {
      setIsModify(false);
      setIsUpload(true);
    });
  };

  const removeTodo = () => {
    setIsUpload(false);
    fetch(`http://localhost:3001/todo/${todo.id}`, { method: "DELETE" }).then(
      (res) => {
        setIsUpload(true);
      }
    );
  };

  return (
    <TodoContainer>
      <div>
        {isModify && (
          <input defaultValue={todo.content} onChange={handleInput} />
        )}
        {isModify || <div>{todo.content}</div>}
      </div>

      <div>
        {isModify && <button onClick={updateTodo}>완료</button>}
        {isModify || <button onClick={handleModify}>수정</button>}
        <button onClick={removeTodo}>삭제</button>
      </div>
    </TodoContainer>
  );
};

export default Todo;
