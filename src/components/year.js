import React from 'react';
import styled from 'styled-components';

import Circuit from './circuit';

const Heading = styled.h2`
  font-size: 3em;
  font-weight: 800;
  margin: 0 0 0.5em;
`;
const YearHolder = styled.div`
  width: 25%;
  padding: 1em 0;
`;

const Year = ({ order, year, circuitlist }) =>
  <YearHolder>
    <Heading>{year}</Heading>
    <div>
      {order.map((orderedId) =>
        <Circuit key={orderedId} {...circuitlist.find(({ id }) => id === orderedId) } />
      )}
    </div>
  </YearHolder>

export default Year;
