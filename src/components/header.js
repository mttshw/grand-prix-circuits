import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Logo from './logo';
import Navigation from './navigation';

const Headerdiv = styled.div`
  background: #314057
`;
const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
`;
const LogoHolder = styled.div`
  order: 1;
  flex-grow: 1;
  a {
    color: white;
    text-decoration: none;
  }
`

const SiteHeader = ({title}) =>
  <Headerdiv>
    <Container>
      <LogoHolder>
        <Link to="/"><Logo title={title} /></Link>
      </LogoHolder>
      <Navigation />
    </Container>
  </Headerdiv>

export default SiteHeader;
