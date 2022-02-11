import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './theme/globalStyle'
import App from './pages/home/App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
