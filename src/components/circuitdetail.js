import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import circuitlist from '../data/circuitdata';

import CircuitTabs from './circuittabs';
import CircuitInfo from './circuitinfo';

const Heading = styled.h1`
  margin: 1em 0 0;
  font-size: 3.6em;
`;

const CircuitHolder = styled.div`
  margin-bottom: 3.2em;
`;

const CircuitDetail = ({params}) =>
  <div className="container">
    <Heading>{circuitlist[params.id-1].name}</Heading>

    <CircuitInfo circuitdata={circuitlist[params.id-1]} />

    <CircuitHolder>

      <CircuitTabs layouts={circuitlist[params.id-1].layouts} circuitid={circuitlist[params.id-1].id} circuitcoords={circuitlist[params.id-1].coords} />


    </CircuitHolder>
  </div>
export default CircuitDetail;
