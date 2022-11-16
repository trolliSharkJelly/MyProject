import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setPrevGroup,
  setNextGroup,
} from "../slice/currentPageSlice";

const PageButtons = ({ firstButton, totalPage }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setCurrentPage(1))}>{"<<"}</button>
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
      <button onClick={() => dispatch(setCurrentPage(totalPage))}>
        {">>"}
      </button>
    </div>
  );
};

export default PageButtons;
