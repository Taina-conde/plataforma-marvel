import { useSelector } from 'react-redux';
import Wrapper from '../../shared/Wrapper/';
import Card from '../../shared/Card/'
const PersonagensView = () => {
    const personagens = useSelector(state => state.personagens);
    const personagensArr = Object.keys(personagens);
    return (
        <Wrapper content = {personagensArr}/>
    )
}
export default PersonagensView;