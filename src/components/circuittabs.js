import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import GoogleMap from 'google-map-react';


const CircuitHolder = styled.div`
  margin-bottom: 3.2em;
`;
const YearList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  min-height: 550px;
  .isvg {
    position: absolute;
    top: 0;
    left: 25%;
    width: 75%;
    display: block;
    z-index: 1;
    svg {
      width: 100%;
      height: 100%;
      path {
        stroke: #eee;
      }
    }
  }
`;
const YearItemHolder = styled.li`
  width: 25%;
  &:first-child {
    .isvg {
      z-index: 2;
      path {
        stroke: #000;
      }
    }
    button.active {
      font-weight: bold;
    }
  }
`;
const YearItem = styled.button`
  margin: 0 0 1px 0;
  padding: 0.5em 1em;
  font-size: 1.2em;
  background: #eee;
  color: #333;
  width: 100%;
  border: 0;
`;
const MapContainer = styled.div`
  height: 400px;
  width: 100%;
`;

const CircuitTabs = ({layouts, circuitid, circuitcoords}) =>
  <CircuitHolder>

    <MapContainer>
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyCIN5BfCKWYcBpICyp-YeY4PEj-QaHnWLg'
        }}
        defaultCenter={circuitcoords}
        defaultZoom={13}>
        <YearList {...circuitcoords}>
          {Object.keys(layouts).map((key) =>
            <YearItemHolder key={key} >
              <YearItem index={key} >
                {layouts[key].years}
              </YearItem>
              <Isvg src={ '/img/circuits/' + circuitid + '/' + key + '.svg' } />

            </YearItemHolder>
          )}
        </YearList>
      </GoogleMap>
    </MapContainer>
  </CircuitHolder>

export default CircuitTabs;
