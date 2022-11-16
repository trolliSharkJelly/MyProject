import data from "./data/data.json";
import { pageGroup } from "./data/data";
import Item from "./components/Item";
import PageButtons from "./components/PageButtons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  let pageCount = pageGroup.length; // 화면에 표시되는 페이지 버튼 갯수
  let dataCount = 10; // 화면에 표시되는 데이터 갯수
  let currentPage = useSelector((state) => state.currentPage.value);
  let totalPage = Math.ceil(data.length / dataCount); // 총 페이지 수 = 전체 데이터 갯수 / 화면에 표시되는 데이터 갯수
  let buttonGroup = Math.ceil(currentPage / pageCount); // 현재 페이지가 몇 번째 그룹에 속한지 알아야 그룹 상의 첫번째 숫자와 마지막 숫자를 구할 수 있다.
  let lastButton = buttonGroup * pageGroup.length;
  let firstButton = lastButton - (pageGroup.length - 1);
  let startData = currentPage * pageCount - (pageCount - 1) - 1;
  let lastData = currentPage * pageCount - 1;

  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    setViewData([]);

    for (let i = startData; i <= lastData; i++) {
      setViewData((prev) => [...prev, data[i]]);
    }
  }, [currentPage]);

  return (
    <div>
      <ul>
        {/* 페이지에 보여질 데이터 */}
        {viewData &&
          viewData.map((value, index) => (
            <Item key={index} data={value.title} />
          ))}
      </ul>

      {/* 페이지 이동 버튼 */}
      <PageButtons firstButton={firstButton} />
    </div>
  );
}

export default App;
