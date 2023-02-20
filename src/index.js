import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// npm install react-redux
// npm install @reduxjs/toolkit
// npm i react-loader-spinner
// npm i axios
// npm i debounce
// npm i prop-types
// npm i notiflix
// npm i nanoid
// npm i react-icons
// npm i formik
// npm install --save styled-components
// npm i yup

