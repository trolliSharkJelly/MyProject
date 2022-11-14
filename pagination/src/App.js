import data from "./data/data.json";
import { pageGroup } from "./data/data";
import Item from "./components/Item";
import PageButtons from "./components/PageButtons";

function App() {
  return (
    <div>
      <ul>
        {/* 페이지에 보여질 데이터 */}
        {data.map((value, index) => (
          <Item key={index} data={value.title} />
        ))}
      </ul>

      {/* 페이지 이동 버튼 */}
      <PageButtons pageGroup={pageGroup} />
    </div>
  );
}

export default App;
