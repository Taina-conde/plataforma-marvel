import { IoCloseCircleOutline } from "react-icons/io5";
import StyledCloseButton from './StyledCloseButton';

const CloseButton = (props) => {
    return (
        <StyledCloseButton onClick = {props.onClick}>
            <IoCloseCircleOutline size= {35}/> 
        </StyledCloseButton>
    )
}
export default CloseButton;