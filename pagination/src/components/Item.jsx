import styled from "styled-components";

const Item = ({ data }) => {
  return <Conatiner>{data}</Conatiner>;
};

const Conatiner = styled.li`
  width: 100%;
  margin: 0.1rem 0;
  padding: 1rem;
  border-bottom: 1px solid #d5d5d5;
`;

export default Item;
