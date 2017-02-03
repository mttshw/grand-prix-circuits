import React from "react";
import styled from 'styled-components';

const SVGHolder = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  bottom: -5px;
  position: relative;
`;

const Ident = () =>
  <SVGHolder>
    <svg viewBox="7 7 30 30" version="1.1">
        <defs>
            <polygon id="path-1" points="3.03030303e-05 29.9851515 29.9851515 29.9851515 29.9851515 1.51515151e-05 3.03030303e-05 1.51515151e-05 3.03030303e-05 29.9851515"></polygon>
        </defs>
        <g id="ident" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(22.000000, 22.000000) rotate(-315.000000) translate(-22.000000, -22.000000) translate(7.000000, 7.000000)">
            <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
            </mask>
            <g id="Clip-2"></g>
            <path d="M14.9926061,21.2409242 L21.4412424,24.4227424 L14.9926061,5.17865152 L8.54412121,24.4227424 L14.9926061,21.2409242 Z M29.9851818,14.9925909 C29.9851818,23.2727424 23.2726061,29.9851667 14.9926061,29.9851667 C6.71245455,29.9851667 3.03030303e-05,23.2727424 3.03030303e-05,14.9925909 C3.03030303e-05,6.71243939 6.71245455,1.51515151e-05 14.9926061,1.51515151e-05 C23.2726061,1.51515151e-05 29.9851818,6.71243939 29.9851818,14.9925909 L29.9851818,14.9925909 Z" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path>
        </g>
    </svg>
  </SVGHolder>

export default Ident;
