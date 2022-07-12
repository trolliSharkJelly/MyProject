import React, { memo, useEffect, useRef, useState } from "react";
import Calendar_comp from "./Calendar_compo";
import styled from "styled-components";
import { faAlignLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .modal {
    position: absolute;
    left: -220%;
    top: 100%;
    width: 400px;
    height: 300px;
    background-color: white;
    padding: 16px;
    border: 1px solid black;
    border-radius: 1rem;
  }

  .modal__title--container {
    justify-content: center;
  }

  .modal__title--container,
  .modal__content--container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .icon {
    margin-right: 8px;
  }

  .modal--title {
    font-size: 24px;
  }

  .modal--title,
  .modal--content {
    width: 90%;
    border-bottom: 1px solid gray;
    transition: border-bottom ease-in-out 0.3s;

    &:focus {
      border-bottom: 2px solid rgb(1, 104, 248);
    }
  }

  input {
    background-color: none;
    padding: 5px;
    /* margin-right: 0.5rem; */
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 16px;
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
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState("");
  // const input = useRef(null);

  // useEffect(() => {
  //   input.current.focus();
  //   setValue("");
  // }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  return (
    <AddFormContainer>
      {isModal || (
        <div className="modal">
          <div className="modal__title--container">
            {/* <FontAwesomeIcon className="icon" icon={faBell} /> */}
            <input className="modal--title" placeholder="제목 추가" />
          </div>

          <div className="modal__content--container">
            <FontAwesomeIcon className="icon" icon={faAlignLeft} />
            <input className="modal--content" placeholder="설명 추가" />
          </div>

          <div className="modal__place--container">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <input className="modal--content" placeholder="장소 추가" />
          </div>

          <div className="modal__date--container">
            <FontAwesomeIcon className="icon" icon={faCalendarCheck} />
          </div>

          {/* <Calendar_comp /> */}
          <div>
            <button>추가</button>
          </div>
        </div>

        // <input
        //   className="addInput"
        //   // ref={input}
        //   value={value}
        //   placeholder="할 일을 입력하세요."
        //   onChange={onChangeInput}
        // />
      )}

      {/* <input
        className="addInput"
        ref={input}
        value={value}
        placeholder="할 일을 입력하세요."
        onChange={onChangeInput}
      /> */}

      <button className="addButton" type="submit" onClick={addTodo(value)}>
        추가
      </button>
    </AddFormContainer>
  );
});

export default AddForm;
