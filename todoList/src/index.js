// 입구 파일 index.js를 찾고 거기에 써있는대로 동작한다
// 여러 전역적인 설정들이 들어간다
// app.js에서 편집하며 ui를 만들어간다
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; //.js확장자가 생략되었다.
import TodoList from "./TodoList";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <TodoList />
  // <Library />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
