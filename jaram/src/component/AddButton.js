import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 100px;
  height: 100px;
  background-color: #f4e06d;
  border: none;
  border-radius: 50%;
  font-size: 96px;
  line-height: 100px;
  color: #656565;

  &:hover {
    background-color: yellow;
  }
`;

const handleButton = () => {
  console.log("클릭");
};

const AddButton = () => {
  return <Button onClick={handleButton}>+</Button>;
};

export default AddButton;
