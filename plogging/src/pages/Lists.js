import styled from "styled-components";
import List from "../component/List";
const Container = styled.main`
  background-color: beige;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .listContainer {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Lists = ({ list }) => {
  return (
    <Container>
      <h1>같이 쓰레기 줍자</h1>
      <div className="listContainer">
        {list.map((el, idx) => {
          return <List key={idx} el={el} />;
        })}
      </div>
    </Container>
  );
};

export default Lists;
