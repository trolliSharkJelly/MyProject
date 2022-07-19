import styled from "styled-components";

const Container = styled.div`
  width: 270px;
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

  .imgContainer {
    width: 100%;
    height: 202px;
    border: 1px solid black;
    border-radius: 5px;
  }

  img {
    width: 100%;
    height: 202px;
  }

  .title {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }

  .infoContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .info {
    flex-grow: 1;
    color: gray;
    font-size: 0.9rem;
    text-align: center;
  }

  .info_distance {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  }

  .titleContainer,
  .infoContainer,
  .buttonContainer {
    margin-top: 5%;
  }

  .button_register {
    width: 100%;
    padding: 3%;
    background-color: #dae2b6;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .button_register:active {
    box-shadow: 1px 1px 5px gray;
  }

  .button_register:hover {
    background-color: #377d71;
    color: white;
  }
`;

const List = ({ el }) => {
  return (
    <Container>
      {/* 이미지 컨테이너 */}
      <div className="imgContainer">
        <img src={el.imgBase64} />
      </div>

      {/* 제목 컨테이너 */}
      <div className="titleContainer">
        <div className="title">{el.title}</div>
      </div>

      {/* 관련 정보 컨테이너 */}
      <div className="infoContainer">
        <span className="info_time info">
          <strong>소요시간 </strong> {el.time}h
        </span>

        <span className="info_distance info">
          <strong>총 거리 </strong> {el.distance} km
        </span>

        <span className="info_number info">
          <strong>인원 </strong> {el.number}명
        </span>
      </div>

      <div className="buttonContainer">
        <button className="button_register">신청하기</button>
      </div>
    </Container>
  );
};

export default List;
