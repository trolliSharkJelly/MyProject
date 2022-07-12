import React, { memo, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  faTrashCan,
  faPenToSquare,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: rgb(118, 124, 138);

  .todoContent {
    display: flex;
    align-items: center;
  }

  .toggle {
    font-size: 32px;
    margin-right: 16px;
  }

  .updateInput {
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 20px;
    color: rgb(1, 104, 248);
    animation: fadein 0.8s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .isChecked {
    color: rgb(58, 64, 86);
  }

  .editBtn {
    margin-right: 8px;
  }

  .Btn {
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: rgb(239, 239, 239);
      color: rgb(1, 104, 248);
    }
  }
`;

const Todo = memo(
  ({ id, todo, isChecked, updateTodo, deleteTodo, toggleCheck }) => {
    const [value, setValue] = useState(todo);
    const [isUpdate, setIsUpdate] = useState(false);
    const input = useRef(null);

    useEffect(() => {});

    useEffect(() => {
      setIsUpdate(false);
    }, [todo]);

    const onClickTodo = () => {
      setIsUpdate(true);
    };

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const onFormSubmit = (e) => {
      e.preventDefault();

      setIsUpdate(false);
      if (!value) {
        setValue(todo);
      } else {
        if (todo !== value) {
          updateTodo(id, value, isChecked);
        }
      }
    };

    const onBlurInput = () => {
      setIsUpdate(false);
    };

    const onKeyUpInput = (e) => {
      if (e.key === "Escape") setIsUpdate(false);
    };

    return (
      <TodoContainer>
        <div className="todoContent">
          <span className="toggle" onClick={toggleCheck(id)}>
            {isChecked ? (
              <FontAwesomeIcon className="isChecked" icon={faSquareCheck} />
            ) : (
              <FontAwesomeIcon icon={faSquare} />
            )}
          </span>
          {isUpdate || <span className="content">{todo}</span>}
          {isUpdate && (
            <form onSubmit={onFormSubmit}>
              <input
                className="updateInput"
                ref={input}
                value={value}
                onChange={onChangeInput}
                onBlur={onBlurInput}
                onKeyUp={onKeyUpInput}
              />
            </form>
          )}
        </div>

        <div className="editDeleteBtn">
          <span className="btnContainer">
            <FontAwesomeIcon
              className="editBtn Btn"
              role="updateTodo"
              icon={faPenToSquare}
              onClick={onClickTodo}
            />
          </span>

          <span className="btnContainer">
            <FontAwesomeIcon
              className="deleteBtn Btn"
              role="deleteTodo"
              icon={faTrashCan}
              onClick={deleteTodo(id)}
            />
          </span>
        </div>
      </TodoContainer>
    );
  }
);

export default Todo;
