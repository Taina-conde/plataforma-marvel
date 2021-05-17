import styled from 'styled-components';
import picture from '../../../../utils/assets/img/profile-picture@2x.png';


const ProfilePicture = styled.div`
width: 55px;
height: 55px;
display: inline-block;
background: transparent url(${picture}) 0% 0% no-repeat padding-box;
box-shadow: 3px 3px 3px #FF000030;
border-radius: 27px;
opacity: 1;
`

export default ProfilePicture;