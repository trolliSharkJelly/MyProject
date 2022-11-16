import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setCurrentPage,
  setPrevGroup,
  setNextGroup,
} from "../slice/currentPageSlice";

const PageButtons = ({ firstButton, totalPage, lastButton }) => {
  let currentPage = useSelector((state) => state.currentPage.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <button onClick={() => dispatch(setCurrentPage(1))}>{"<<"}</button>
      <button onClick={() => dispatch(setPrevGroup())}>{"<"}</button>

      {[
        Array(lastButton - firstButton + 1)
          .fill(firstButton)
          .map((value, index) => (
            <button
              key={index}
              className={value + index == currentPage ? "btnActive" : ""}
              onClick={() => dispatch(setCurrentPage(value + index))}
            >
              {value + index}
            </button>
          )),
      ]}

      <button onClick={() => dispatch(setNextGroup())}>{">"}</button>
      <button onClick={() => dispatch(setCurrentPage(totalPage))}>
        {">>"}
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    width: 5%;
    background-color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.3rem;
    outline: 0;
    border: 0;
    border-radius: 0.3rem;
    color: gray;
    font-weight: bold;
  }

  button:hover {
    background-color: #7595ff;
    color: white;
  }

  .btnActive {
    background-color: #7595ff;
    color: white;
  }
`;

export default PageButtons;
