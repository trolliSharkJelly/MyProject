import Todo from "./Todo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Todos = ({ setIsUpload }) => {
  const [todos, setTodos] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isUpload = useSelector((state) => state.isUpload);

  useEffect(() => {
    setIsLoading(false);

    fetch("http://localhost:3001/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(true);
      });
  }, [isUpload]);

  return (
    <ul>
      {isLoading &&
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} setIsUpload={setIsUpload} />;
        })}
    </ul>
  );
};

export default Todos;
