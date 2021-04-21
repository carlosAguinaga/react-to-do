import React from 'react';
import ReactDOM from 'react-dom';
import TaskApp from './TaskApp';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>,
  document.getElementById('root')
);
