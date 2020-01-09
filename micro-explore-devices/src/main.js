import './main.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('Micro Explore Devices Connected');

render(<App title={'Micro Explore Devices Connected'}/>, document.getElementById('micro-explore-devices-app'));
