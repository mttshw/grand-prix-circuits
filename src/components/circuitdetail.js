import React from 'react';
import styled from 'styled-components';

import circuitlist from '../data/circuitdata';

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

const CircuitDetail = ({params}) =>
  <CircuitHolder>
    <Heading>{circuitlist[params.id-1].name}</Heading>
    <Paragraph>
      <FlagHolder><Flag country={circuitlist[params.id-1].country} flag={circuitlist[params.id-1].flag} /></FlagHolder>
      {circuitlist[params.id-1].place}, {circuitlist[params.id-1].country}
    </Paragraph>
  </CircuitHolder>

export default CircuitDetail;
