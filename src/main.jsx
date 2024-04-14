import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import '../node_modules/modern-normalize/modern-normalize.css'
import '../node_modules/reset-css/reset.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
