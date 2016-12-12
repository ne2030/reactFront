import React from 'react';
import {render} from 'react-dom';

import Root from './routes/Root';
import './index.css';

const appElement = document.getElementById('root');

render(
  <Root />,
  appElement
);
