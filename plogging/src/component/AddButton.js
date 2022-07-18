import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const AddButton = ({ openAddList }) => {
  return <Button onClick={openAddList}>글 추가 버튼</Button>;
};

export default AddButton;
