import React, { Component } from 'react';

import SiteHeader from './components/header';
import SiteFooter from './components/footer';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }
  .container {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 1em;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <SiteHeader title="Grand Prix Circuits" />
        {this.props.children}
        <SiteFooter />
      </div>
    );
  }
}

export default App;
