import './main.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('Micro Cats Connected');

render(<App title={'Micro Cats Connected'}/>, document.getElementById('micro-cats-app'));
