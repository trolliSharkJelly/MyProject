import styled from "styled-components";
import SubmitButton from "../component/SubmitButton";
import { time, distance, number } from "../data/AddListData";
const Container = styled.main`
  /* background-color: #e7f6f2; */
  width: 500px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;

  input {
    background-color: transparent;
    height: 2rem;
    font-size: 1.5em;
    border: none;
    border-bottom: 2px solid gray;
  }

  input:focus {
    border: none;
    color: blue;
  }

  .inputContainer {
    padding: 10px;
  }

  .contentContainer {
    display: flex;
    justify-content: space-between;
  }

  .content_child > input {
    margin: 4px;
  }

  .contentContainer,
  .imgContainer,
  .buttonContainer {
    margin-top: 6%;
  }

  .buttonContainer {
    display: flex;
    justify-content: space-around;
  }

  .title {
    width: 100%;
  }

  select {
    height: 2rem;
    font-size: 1.5rem;
    margin-right: 10px;
  }

  button {
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  .btn_submit {
    background-color: #377d71;
  }
`;

const AddLists = ({
  handleTitle,
  handleTime,
  handleDistance,
  handleNumber,
  handleImg,
  addList,
}) => {
  return (
    <Container>
      <div className="inputContainer container">
        <div className="textContainer container">
          장소
          <div>
            <input
              className="title"
              type="text"
              placeholder="장소 추가"
              onChange={handleTitle}
            />
          </div>
        </div>

        <div className="contentContainer container">
          <div className="content_child">
            <div>시간</div>
            <select onChange={handleTime}>
              <option disabled selected>
                시간 선택
              </option>
              {time.map((value, idx) => (
                <option key={idx} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="content_child">
            <div>총 거리(km)</div>
            <select onChange={handleDistance}>
              <option disabled selected>
                거리 선택
              </option>

              {distance.map((value, idx) => (
                <option key={idx} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="content_child">
            <div>인원(명)</div>
            <select onChange={handleNumber}>
              <option disabled selected>
                인원 선택
              </option>

              {number.map((value, idx) => (
                <option key={idx} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="imgContainer container">
          <div>사진</div>
          <input type="file" onChange={handleImg} />
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="buttonContainer">
        <SubmitButton className="btn_submit" addList={addList} />
        <button>뒤로 가기</button>
      </div>
    </Container>
  );
};

export default AddLists;
