import React from 'react';
import styled from 'styled-components';

import seasonlist from '../data/yeardata';
import circuitlist from '../data/circuitdata';

import Year from './year';

const CircuitContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2em;
`;

const Years = () =>
  <CircuitContainer className="container">
    {seasonlist.map(({ year, order }) =>
      <Year key={year} year={year} order={order} circuitlist={circuitlist} />
    )}
  </CircuitContainer>

export default Years;
