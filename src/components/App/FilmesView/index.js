import { useSelector } from 'react-redux';
import Wrapper from '../../shared/Wrapper/';

const FilmesView = () => {
    const filmes = useSelector(state => state.filmes)
    const filmesArr = Object.keys(filmes);
    return (
        <Wrapper content = {filmesArr}/>
            
    )
}
export default FilmesView;