import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimation";

const viewportHeight = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
const viewportWidth = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const positionTop = viewportHeight / 2;
const positionLeft = viewportWidth / 2;

const TranslateXYAnimation = keyframes`  
0%   {top: ${positionTop}px; left: ${positionLeft}px;}
20%   {top: ${positionTop}px; left: ${positionLeft}px;}
50%  {top: ${positionTop}px; left: ${positionLeft / 3}px;}
60%  {top: ${positionTop}px; left: ${positionLeft / 3}px;}
100%  {top: ${positionTop / 4}px; left: ${positionLeft / 3}px;}
`;
const TranslateYAnimation = keyframes`  
0%   {top: ${positionTop}px; }
25%   {top: ${positionTop}px; }
100%  {top: ${positionTop/6}px;}
`;
const Translate = styled(BaseAnimation)`
  animation-name: ${TranslateXYAnimation};
  
`;
export default Translate;
