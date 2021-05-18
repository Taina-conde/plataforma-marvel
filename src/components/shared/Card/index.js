import StyledCard from './StyledCard';
import MiniCard from './MiniCard';


const Card = (props) => {
    const {cardContent} = props;
    return (
        <StyledCard backgroundImg = {cardContent.imgUrl}>
            <MiniCard descricao = {cardContent.descricao} nome ={cardContent.nome}/>    
        </StyledCard>
    )
}
export default Card;