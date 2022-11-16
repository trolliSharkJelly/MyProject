import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setPrevGroup,
  setNextGroup,
} from "../slice/currentPageSlice";

const PageButtons = ({ firstButton }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button>{"<<"}</button>
      <button onClick={() => dispatch(setPrevGroup())}>{"<"}</button>

      {[
        Array(5)
          .fill(firstButton)
          .map((value, index) => (
            <button
              key={index}
              onClick={() => dispatch(setCurrentPage(value + index))}
            >
              {value + index}
            </button>
          )),
      ]}

      <button onClick={() => dispatch(setNextGroup())}>{">"}</button>
      <button>{">>"}</button>
    </div>
  );
};

export default PageButtons;
