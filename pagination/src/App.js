import Item from "./components/Item";
import data from "./data/data.json";

function App() {
  return (
    <div>
      <ul>
        {data.map((value, index) => (
          <Item key={index} data={value.title} />
        ))}
      </ul>
    </div>
  );
}

export default App;
