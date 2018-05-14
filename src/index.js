import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello x="beso" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <h1>reactjs testing...</h1>
  </div>

);

render(<App />, document.getElementById('root'));
