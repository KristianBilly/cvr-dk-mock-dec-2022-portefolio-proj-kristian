import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AuthContextProvider } from './Context/AuthContext'
import { NavbarContextProvider } from './Context/NavbarContext'
import { SearchContextProvider } from './Context/SearchContext'
import { ThemeContextProvider } from './Context/ThemeContext'
import './Styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContextProvider>
        <NavbarContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </NavbarContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
