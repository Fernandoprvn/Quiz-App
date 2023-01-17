import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from "react-redux";
import {store} from './App/store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
       <App />
     </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

