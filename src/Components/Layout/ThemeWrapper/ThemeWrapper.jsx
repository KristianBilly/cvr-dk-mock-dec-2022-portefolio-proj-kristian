import cc from 'classcat'
import { useThemeContext } from '../../../Context/ThemeContext'

export const ThemeWrapper = ({ children }) => {
  const { isDarkTheme } = useThemeContext()

  return (
    <div
      className={cc([
        'theme-wrapper',
        'light-theme',
        {
          'dark-theme': isDarkTheme,
        },
      ])}
    >
      {children}
    </div>
  )
}
