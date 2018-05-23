import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import register from './registerServiceWorker';

function Text(props) {
    return <h1><span style={{color: props.color}}>{props.value}</span></h1>;
}
  
const element = <Text color="red" value="Hello World! You suck! Sincerely, Ethan." />;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );