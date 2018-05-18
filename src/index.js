import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello x="beso2" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <h1>reactjs testing...</h1>
    {/*}ssss*/}
    <MuiThemeProvider>
      <MyAwesomeReactComponent />
    </MuiThemeProvider>
  </div>
  
);

render(<App />, document.getElementById('root'));
