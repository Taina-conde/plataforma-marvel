import { useSelector } from 'react-redux';
import Wrapper from '../../shared/Wrapper/';

const HqsView = () => {
    const hqs = useSelector(state => state.hqs);
    const hqsArr = Object.keys(hqs);
    return (
        <Wrapper content = {hqsArr}/>
         
    )
}
export default HqsView;