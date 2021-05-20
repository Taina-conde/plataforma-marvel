import styled from "styled-components";

const Filter = (props) => {
    return (
        <StyledSelect>
            <option>Lançamento</option>
            <option>Cronologia</option>
        </StyledSelect>
    )
}

const StyledSelect = styled.select`
background: #000000 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border: 1px solid #FF0000;
border-radius: 10px;

`
export default Filter;