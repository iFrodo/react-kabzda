import React from 'react';
import './index.css';


import state from './state'
import {rerenderEntireThree} from "./components/render";
window.state = state

rerenderEntireThree(state)
