import { useDispatch } from "react-redux";
import { setCurrentPage } from "../slice/currentPageSlice";

const PageButtons = ({ pageGroup }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button>{"<<"}</button>
      <button>{"<"}</button>

      {pageGroup.map((value, index) => (
        <button key={index} onClick={() => dispatch(setCurrentPage(index))}>
          {value}
        </button>
      ))}

      <button>{">"}</button>
      <button>{">>"}</button>
    </div>
  );
};

export default PageButtons;
