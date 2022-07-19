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
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState("");

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

  // (Event 4) Img State in <AddList />
  const handleImg = (event) => {
    console.log("이벤트가 실행되긴함?");
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      console.log("imgBase64 : ", base64.toString());
      if (base64) setImgBase64(base64.toString());
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  // (Event 5) mount
  useEffect(() => {
    console.log("마운트실행");
    const localList = localStorage.getItem("List");
    if (localList) {
      setList(JSON.parse(localList));
    }
  }, []);

  // (Event 6-1) save List in LocalStorage
  const addList = () => {
    let obj = { title, time, distance, number, imgBase64 };
    setList((prev) => [...prev, obj]);
    setOpenModal(!openModal);
  };

  // (Event 6-2) save List in LocalStorage
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
          handleImg={handleImg}
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
