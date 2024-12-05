import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import 'antd/dist/reset.css'; // Ant Design CSS
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
