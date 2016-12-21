import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function Main(props) {
  return (
    <div>
      <Header />
      {/*<Footer />*/}
    </div>
  );
}

render(<Main />, document.getElementById('app'));
