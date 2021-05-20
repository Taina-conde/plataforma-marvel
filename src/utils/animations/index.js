import { keyframes } from "styled-components";
const viewportHeight = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
const positionTop = viewportHeight/2;
const positionLeft = viewportWidth/2;

export const translate = keyframes`
0%   {top: ${positionTop}px; left: ${positionLeft}px;}
10%   {top: ${positionTop}px; left: ${positionLeft}px;}
40%  {top: ${positionTop}px; left: ${(positionLeft/3)}px;}
60%  {top: ${positionTop}px; left: ${(positionLeft/3)}px;}
100%  {top: ${positionTop/4}px; left: ${positionLeft/3}px;}
`;
