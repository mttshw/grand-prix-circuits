import React from 'react';
import styled from 'styled-components';

import Navigation from './navigation';

const Footerdiv = styled.div`
  background: #2E343C
`;
const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
`;
const Copyright = styled.p`
  color: white;
  padding: 1.9em 0;
  order: 1;
  flex-grow: 1;
`

const SiteFooter = ({title}) =>
  <Footerdiv>
    <Container>
      <Copyright>&copy; {new Date().getFullYear()} Grand Prix Circuits</Copyright>
      <Navigation />
    </Container>
  </Footerdiv>

export default SiteFooter;
