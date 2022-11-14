const PageButtons = ({ pageGroup }) => {
  return (
    <div>
      <button>{"<<"}</button>

      {pageGroup.map((value, index) => (
        <button key={index}>{value}</button>
      ))}

      <button>{">>"}</button>
    </div>
  );
};

export default PageButtons;
