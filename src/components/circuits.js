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
    width: 30%;
    margin-bottom: 2em;
    &:before {
      content: '';
      background: #eee;
      height: 100px;
      width: 100%;
      margin-bottom: 1em;
      display: block;
    }
    & > * {
      padding: 0 10px;
    }
  }
`;

const Circuits = () =>
  <CircuitContainer className="container">
    {Object.keys(circuitlist).map((key) =>
        <Circuit id={circuitlist[key].id} name={circuitlist[key].name} place={circuitlist[key].place} country={circuitlist[key].country} flag={circuitlist[key].flag} />
    )}
  </CircuitContainer>


export default Circuits;
