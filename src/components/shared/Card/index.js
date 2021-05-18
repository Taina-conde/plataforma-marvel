import StyledCard from './StyledCard';


const Card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
}
export default Card;