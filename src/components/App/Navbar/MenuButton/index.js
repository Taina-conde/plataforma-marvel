import StyledMenuButton from './StyledMenuButton';
import { BiMenu } from "react-icons/bi";


const MenuButton = (props)=> {

    return (
        <StyledMenuButton onClick = {props.onClick}>
            <BiMenu size={40} />
        </StyledMenuButton>
    )
}
export default MenuButton;