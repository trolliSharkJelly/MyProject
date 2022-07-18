import { createGlobalStyle } from "styled-components";
import Lists from "./pages/Lists";
import AddList from "./pages/AddList";
import AddButton from "./component/AddButton";
import { useEffect, useState } from "react";

// 🎀 CSS 🎀
const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
`;

// 🧩 Component 🧩
function App() {
  // 🙂 State 🙂
  const [openModal, setOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [number, setNumber] = useState(0);

  // 😈 Event 😈
  // (Event 1) open <AddList/>
  const openAddList = () => {
    setOpenModal(!openModal);
  };

  // (Event 2) text State in <AddList/>
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  // (Event 3) content State in <AddList/>
  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleDistance = (event) => {
    setDistance(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  // (Event 4) mount
  useEffect(() => {
    console.log("마운트실행");
    const localList = localStorage.getItem("List");
    if (localList) {
      setList(JSON.parse(localList));
    }
  }, []);

  // (Event 5-1) save List in LocalStorage
  const addList = () => {
    let obj = { title, time, distance, number };
    setList((prev) => [...prev, obj]);
    setOpenModal(!openModal);
  };

  // (Event 5-2) save List in LocalStorage
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
  }, [list]);

  // [[[ TEST ]]]

  // 🧚🏻‍♀️ Return 🧚🏻‍♀️
  return (
    <>
      <GlobalStyle />

      {openModal ? (
        <AddList
          handleTitle={handleTitle}
          handleTime={handleTime}
          handleDistance={handleDistance}
          handleNumber={handleNumber}
          addList={addList}
        />
      ) : (
        <Lists list={list} />
      )}
      <AddButton openAddList={openAddList} />
    </>
  );
}

export default App;
