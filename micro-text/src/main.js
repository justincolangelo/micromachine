import './main.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('Micro Text Connected');

render(<App title={'Micro Text Connected'}/>, document.getElementById('micro-text-app'));
