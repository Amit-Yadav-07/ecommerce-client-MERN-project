import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // ✅ Import BrowserRouter
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './Context';
import Providers from './Providers.jsx'
import UseReducer from './Reducer/UseReducer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      {/* <UseReducer /> */}
      <App />
    </Providers>
  </React.StrictMode>
)



