import data from "./data/data.json";
import Item from "./components/Item";
import PageButtons from "./components/PageButtons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNextGroup, setPrevGroup } from "./slice/currentPageSlice";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  let pageCount = 5; // 화면에 표시되는 페이지 버튼 갯수
  let dataCount = 5; // 화면에 표시되는 데이터 갯수
  let currentPage = useSelector((state) => state.currentPage.value); // 현재 페이지
  let totalPage = Math.ceil(data.length / dataCount); // 총 페이지 수 = 전체 데이터 갯수 / 화면에 표시되는 데이터 갯수
  let buttonGroup = Math.ceil(currentPage / pageCount); // 현재 페이지가 몇 번째 그룹에 속한지 알아야 그룹 상의 첫번째 숫자와 마지막 숫자를 구할 수 있다.
  let lastButton = buttonGroup * pageCount; // 버튼 그룹의 마지막 버튼 숫자
  let firstButton = lastButton - pageCount + 1; // 버튼 그룹의 첫번째 버튼 숫자
  let startData = currentPage * pageCount - (pageCount - 1) - 1; // 화면에 표시되는 시작 데이터
  let lastData = currentPage * pageCount - 1; // 화면에 표시되는 끝 데이터

  const dispatch = useDispatch();

  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    setViewData([]);

    if (data.length < startData) dispatch(setPrevGroup());
    if (startData < 0) dispatch(setNextGroup());

    for (let i = startData; i <= lastData; i++) {
      if (data[i]) setViewData((prev) => [...prev, data[i]]);
    }
  }, [currentPage]);

  for (let i = firstButton; i <= lastButton; i++) {
    if (!data[i * 5 - 4]) lastButton -= 1;
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <ul>
          {/* 페이지에 보여질 데이터 */}
          {viewData &&
            viewData.map((value, index) => (
              <Item key={index} data={value.title} />
            ))}
        </ul>

        {/* 페이지 이동 버튼 */}
        <PageButtons
          firstButton={firstButton}
          totalPage={totalPage}
          lastButton={lastButton}
        />
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export default App;
