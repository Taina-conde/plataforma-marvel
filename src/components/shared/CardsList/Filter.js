import styled from "styled-components";

const Filter = (props) => {
  const selectHandler = (event) => {
    props.onSelectFilterHandler(event.target.value);
  };
  return (
    <StyledSelect value={props.filterBy} onChange={selectHandler}>
      <option value="" disabled>
        Filtrar por:{" "}
      </option>
      <option value="lancamento">Lançamento</option>
      <option value="cronologia">Cronologia</option>
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  background: #000000 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #ff0000;
  border-radius: 10px;
  padding: 8px;
  color: #ff0000;
  font: normal normal bold 20px/28px Axiforma;
  margin-top: 30px;
  margin-left: 40px;
  @media (min-width: 1024px) {
    margin-top: 50px;
    margin-left: 90px;
  }
`;

export default Filter;
