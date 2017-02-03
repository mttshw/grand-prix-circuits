import React, { Component } from 'react';

import Banner from './banner';
import Circuits from './circuits';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Circuits />
      </div>
    );
  }
}

export default Home;
