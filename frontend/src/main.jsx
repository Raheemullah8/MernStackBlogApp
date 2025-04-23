import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'; // Make sure this is after Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import {store} from './redux/Store';



import App from './App.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  
  {/* Toast Container for notifications */}
  <ToastContainer/>
  
  </StrictMode>
 
);