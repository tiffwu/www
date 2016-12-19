import React from 'react';
import { render } from 'react-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

function Main(props) {
  return (
    <div>
      <Nav />
      {/*<Footer />*/}
    </div>
  );
}

render(<Main />, document.getElementById('app'));
