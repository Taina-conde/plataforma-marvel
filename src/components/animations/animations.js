import { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`; 
const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const logoHeight = 95;
  const logoWidth = 237;
  const positionTop = (viewportHeight/2) - (logoHeight/2);
  const positionLeft = (viewportWidth/2) - (logoWidth/2);
  
  export const TranslateXYAnimation = keyframes`  
  0%   {top: ${positionTop}px; left: ${positionLeft}px;}
  20%   {top: ${positionTop}px; left: ${positionLeft}px;}
  50%  {top: ${positionTop}px; left: ${positionLeft /3}px;}
  60%  {top: ${positionTop}px; left: ${positionLeft /3}px;}
  100%  {top: ${positionTop /6}px; left: ${positionLeft /3}px;}
  `;
  export const TranslateYAnimation = keyframes`  
  0%   {top: ${positionTop}px; left: ${positionLeft}px;}
  25%   {top: ${positionTop}px; left: ${positionLeft}px;}
  100%  {top: ${positionTop/6}px; left: ${positionLeft}px;}
  `;