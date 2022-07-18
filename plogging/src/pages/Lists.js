import styled from "styled-components";
import List from "../component/List";
const Container = styled.main`
  background-color: beige;
  height: 100vh;

  .listContainer {
    display: flex;
  }
`;

const Lists = ({ list }) => {
  return (
    <Container>
      <h1>Lists 페이지</h1>
      <div className="listContainer">
        {list.map((el, idx) => {
          return <List key={idx} el={el} />;
        })}
      </div>
    </Container>
  );
};

export default Lists;
