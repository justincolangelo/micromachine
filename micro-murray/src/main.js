import './main.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('Micro Murray Connected');

render(<App title={'Micro Murray Connected'}/>, document.getElementById('micro-murray-app'));
