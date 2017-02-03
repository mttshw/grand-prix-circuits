import React from 'react';
import styled from 'styled-components';

import Ident from './ident';

const LogoHolder = styled.h2`
  margin: 0;
  color: white;
  font-style: italic;
  padding-bottom: 0.6em;
  padding-top: 0.5em;
  font-size: 2.4em;
`;

const Logo = ({title}) =>
  <LogoHolder><Ident /> {title}</LogoHolder>

export default Logo;
