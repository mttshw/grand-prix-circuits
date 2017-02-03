import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const NavigationHolder = styled.nav`
  order: 2;
  font-size: 1.4em;
  margin: 0.8em 0 0;
  display: flex;
  a {
    color: white;
    opacity: 0.8;
    padding: 0;
    margin: 1em 0 1em 1em;
    display: block;
    text-decoration: none;
    font-weight: 600;
    &:hover,
    &:active {
      text-decoration: underline;
      opacity: 1;
    }
  }
`

const Navigation = () =>
  <NavigationHolder>
    <Link to="/years">Circuits by year</Link>
    <Link to="/circuits">List of circuits</Link>
  </NavigationHolder>

export default Navigation;
