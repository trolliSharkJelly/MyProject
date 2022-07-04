import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Modal 구현 시 전체적으로 필요한 css
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modal 배경
const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Modal 버튼
const ModalBtn = styled.button``;

// Modal 내용
const ModalView = styled.div`
  width: 50%;
  background-color: white;
  border: 1px solid black;
`;

const AddList = ({ handleBackClick }) => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <ModalBackdrop onClick={handleBackClick}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <div>
            <label>제목</label>
            <div>
              <input type="text" />
            </div>
          </div>

          {/* <div>
            <label>기간</label>
            <input type="text"></input>
            <FontAwesomeIcon icon="fa-duotone fa-calendar-days" />
            <Calendar onChange={onChange} value={value} />
          </div> */}

          <div>
            <label>분류</label>
            <div>
              <select>
                <option>운동</option>
                <option>취미</option>
                <option>습관</option>
              </select>
            </div>
          </div>

          <div>
            <label>내용</label>
            <div>
              <textarea></textarea>
            </div>
          </div>

          <ModalBtn>추가</ModalBtn>
        </ModalView>
      </ModalBackdrop>
    </>
  );
};

export default AddList;
