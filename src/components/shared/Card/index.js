import StyledCard from './StyledCard';


const Card = (props) => {
    const {cardContent} = props;
    return (
        <StyledCard backgroundImg = {cardContent.imgUrl}>
            {cardContent.nome}
        </StyledCard>
    )
}
export default Card;