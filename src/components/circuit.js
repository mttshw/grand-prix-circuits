import React from 'react';
import styled from 'styled-components';

import Flag from './flag';

const Heading = styled.h3`
  margin: 0;
  font-size: 1.6em;
`;
const Paragraph = styled.p`
  margin: 0;
  font-size: 1.4em;
  font-weight: 200;
`;
const CircuitHolder = styled.div`
  margin-bottom: 1.2em;
`;
const Anchor = styled.a`
  color: black;
`;
const FlagHolder = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 0.5em;
  img {
    width: 16px;
    height: 16px;
    margin-bottom: -3px;
  }
`;

const Circuit = ({ id, name, place, country, flag }) =>
  <CircuitHolder>
    <Heading><Anchor href={'/circuit/'+id}>{name}</Anchor></Heading>
    <Paragraph>
      <FlagHolder><Flag country={country} flag={flag} /></FlagHolder>
      {place}, {country}
    </Paragraph>
  </CircuitHolder>

export default Circuit;
