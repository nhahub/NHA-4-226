import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AppContextProvider} from './context/AppContext.jsx'
import { AuthProvider } from "./context/AuthContext.jsx";
  
import { runIdentityTest , runClinicalTest } from './backendAutomatedTest.js' // Backend test

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthProvider>
  </BrowserRouter>
)

