import React from 'react';
import styled from 'styled-components';

import circuitlist from '../data/circuitdata';

import Circuit from './circuit';

const CircuitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  flex: 1;
  justify-content: space-between;
  & > div {
    width: 22%;
    padding: 10px;
    background: #eee;
  }
`;

const Circuits = () =>
  <CircuitContainer className="container">

    {
      Object.keys(circuitlist).map((key) =>
        <Circuit id={circuitlist[key].id} name={circuitlist[key].name} place={circuitlist[key].place} country={circuitlist[key].country} flag={circuitlist[key].flag} />
      )
    }
  </CircuitContainer>


export default Circuits;
