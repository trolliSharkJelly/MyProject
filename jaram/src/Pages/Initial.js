import AddList from "./AddList";
import { useState } from "react";
import styled from "styled-components";

// 초기 화면 박스 안의 폰트 및 박스 정렬 설정
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;
`;

// 초기 화면 박스 디자인
const InitialBtn = styled.input`
  display: flex;
  justify-content: center;
  width: 906%;
  height: 180px;
  background-color: #e8f6ef;
  padding: 10px;
  border: none;
  border-radius: 40px;
  font-size: 32px;
  font-weight: bold;
  line-height: 60px;
  color: #575555;
  box-shadow: 2px 2px 10px gray;
`;

const Initial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const buttonValue =
    "아직 자람 목록이 없네요.\n 상자를 클릭해서 목록을 생성해보아요!";

  return (
    <>
      {isOpen ? (
        <AddList handleBackClick={openModalHandler} />
      ) : (
        <Container>
          <InitialBtn
            type="button"
            value={buttonValue}
            onClick={openModalHandler}
          />
          ;
        </Container>
      )}
    </>
  );
};
export default Initial;
