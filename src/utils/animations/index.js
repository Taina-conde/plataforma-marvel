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
20%   {top: ${positionTop}px; left: ${positionLeft}px;}
50%  {top: ${positionTop}px; left: ${(positionLeft/3)}px;}
60%  {top: ${positionTop}px; left: ${(positionLeft/3)}px;}
100%  {top: ${positionTop/4}px; left: ${positionLeft/3}px;}
`;

export const translateY = keyframes`
0%   {top: ${positionTop}px; }
25%   {top: ${positionTop}px; }
100%  {top: ${positionTop/6}px;}
`

export const fadeIn = keyframes`
0%   {opacity: 0; }
100%  {opacity: 1;}
`
