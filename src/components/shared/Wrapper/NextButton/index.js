import StyledNextButton from "./StyledNextButton";
import { FaArrowRight } from "react-icons/fa";
const NextButton = (props) => {
    return (
        <StyledNextButton onClick = {props.onClick}>
            <FaArrowRight size ={60} color = "#FF0000"/>
        </StyledNextButton>
    )
}
export default NextButton;