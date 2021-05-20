import RedRectangle from "./RedRectangle";


const Logo = (props) => {
  console.log('animated: ', props.animated)
  return (
    
      <RedRectangle animated = {props.animated}>MARVEL</RedRectangle>
    
  );
};
export default Logo;
