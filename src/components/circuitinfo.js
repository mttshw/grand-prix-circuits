import React from 'react';
import styled from 'styled-components';

import Flag from './flag';

const Location = styled.p`
  margin: 0 0 3em;
  font-size: 1.4em;
  font-weight: 200;
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
const Summary = styled.p`
  font-size: 1.6em;
  color: #6B6B6B;
  line-height: 1.4;
`;

const CircuitInfo = ({circuitdata}) =>
  <div>
    <Location>
      <FlagHolder><Flag country={circuitdata.country} flag={circuitdata.flag} /></FlagHolder>
      {circuitdata.place}, {circuitdata.country}
    </Location>

    <Summary>{circuitdata.summary}</Summary>
  </div>

export default CircuitInfo;
