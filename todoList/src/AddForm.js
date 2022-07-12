import React, { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AddFormContainer = styled.form`
  display: flex;
  align-items: center;
  border-radius: 1px solid black;

  input {
    background-color: none;
    padding: 5px;
    margin-right: 0.5rem;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 24px;
  }

  .addButton {
    display: inline-block;
    width: 80px;
    height: 39px;
    background-color: rgb(1, 104, 248);
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState("");
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue("");
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <AddFormContainer>
      <input
        className="addInput"
        ref={input}
        value={value}
        placeholder="할 일을 입력하세요."
        onChange={onChangeInput}
      />

      <button className="addButton" type="submit" onClick={addTodo(value)}>
        추가
      </button>
    </AddFormContainer>
  );
});

export default AddForm;
