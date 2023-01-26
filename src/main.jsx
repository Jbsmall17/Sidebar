import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Appcontext } from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appcontext>
      <App />
    </Appcontext>
  </React.StrictMode>,
)
