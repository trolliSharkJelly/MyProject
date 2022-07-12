import React, { useEffect, useState, useCallback, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddForm from "./AddForm";
import Todo from "./Todo";

// [css] Global style
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    ul {
        list-style: none;
    }`;

// [css] TodoContainer
const TodoListContainer = styled.main`
  width: 500px;
  height: 600px;
  /* height: 1000px; */
  background-color: rgb(239, 239, 239);
  border-radius: 1rem;
  padding: 1rem;

  .title {
    display: inline;
    margin-right: 0.5rem;
  }

  .titleLength {
    width: 2rem;
    height: 2rem;
    background-color: rgb(58, 64, 86);
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
  }

  .container--title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .container--addForm {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .container--todoList {
    /* background-color: rgb(225, 240, 251); */
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const isMount = useRef(true);

  // todoList, id가 update 시 로컬스토리지에 todoList와 id 저장
  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      localStorage.setItem("id", id);
    }
  }, [todoList, id]);

  // 마운트 시 로컬스토리지에 있는 todoList와 id 불러오기
  useEffect(() => {
    let localTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (localTodoList) setTodoList(localTodoList);

    let localId = JSON.parse(localStorage.getItem("id"));
    if (localId) setId(localId);

    isMount.current = false;
  }, []);

  // [CREATE] 로컬스토리지에 todoList, id 저장
  const addTodo = useCallback(
    (todo) => (e) => {
      console.log("add");
      e.preventDefault();
      if (todo) {
        setTodoList((prevTodoList) => [
          ...prevTodoList,
          {
            id,
            todo,
            isChecked: false,
          },
        ]);

        setId((prevId) => prevId + 1);
      }
    },
    [id]
  );

  // [UPDATE] todoList 수정
  const updateTodo = useCallback(
    (id, todo, isChecked) => {
      // update할 todo의 index 검색
      const index = todoList.findIndex((todoInfo) => todoInfo.id === id);

      // todoList 복제
      const newTodoList = [...todoList];

      // todoList 수정
      newTodoList.splice(index, 1, { id, todo, isChecked });

      setTodoList(newTodoList);
    },
    [todoList]
  );

  //[DELETE] todoList 삭제
  const deleteTodo = useCallback(
    (id) => () => {
      const newTodoList = todoList.filter((todoInfo) => todoInfo.id !== id);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const toggleCheck = useCallback(
    (id) => () => {
      const index = todoList.findIndex((todoInfo) => todoInfo.id === id);
      const newTodoList = [...todoList];

      newTodoList[index].isChecked = newTodoList[index].isChecked
        ? false
        : true;
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <>
      <GlobalStyle />
      <TodoListContainer>
        <div className="container--title">
          <h1 className="title">Todo</h1>
          <span className="titleLength">{todoList.length}</span>
        </div>

        <div className="container--addForm">
          <AddForm addTodo={addTodo} />
        </div>

        <div className="container--todoList">
          <ul>
            {todoList.map((todoInfo) => {
              return (
                <Todo
                  key={todoInfo.id}
                  id={todoInfo.id}
                  todo={todoInfo.todo}
                  isChecked={todoInfo.isChecked}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                  toggleCheck={toggleCheck}
                />
              );
            })}
          </ul>
        </div>
      </TodoListContainer>
    </>
  );
};

export default TodoList;
