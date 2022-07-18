import styled from "styled-components";
import SubmitButton from "../component/SubmitButton";
import { useCallback } from "react";

const Container = styled.main`
  background-color: #e7f6f2;
  height: 100vh;

  .container {
    border: 1px solid black;
  }

  .inputContainer {
    padding: 10px;
  }

  .textContainer {
    background-color: white;
  }
`;

const AddLists = ({
  handleTitle,
  handleTime,
  handleDistance,
  handleNumber,
  addList,
}) => {
  return (
    <Container>
      <h1>AddList 페이지입니다</h1>

      <div className="inputContainer container">
        <div className="textContainer container">
          제목
          <input type="text" onChange={handleTitle} />
        </div>

        <div className="contentContainer container">
          시간
          <input type="text" onChange={handleTime} />
          총 길이
          <input type="text" onChange={handleDistance} />
          인원
          <input type="text" onChange={handleNumber} />
        </div>

        <div className="imgContainer container">
          이미지
          <input type="img" />
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="buttonContainer">
        <SubmitButton addList={addList} />
      </div>
    </Container>
  );
};

export default AddLists;
