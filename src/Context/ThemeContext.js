import { createContext, useContext, useState } from 'react'
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_LOCAL_STORAGE_KEY,
} from '../Constants/Constants'
import { getLocalStorage } from '../Utils/getLocalStorage'

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    getLocalStorage(THEME_LOCAL_STORAGE_KEY, LIGHT_THEME)
  )

  const isDarkTheme = theme === DARK_THEME

  const toggleTheme = () =>
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
