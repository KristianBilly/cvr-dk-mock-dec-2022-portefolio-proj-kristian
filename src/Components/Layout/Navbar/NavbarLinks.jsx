import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LOG_OUT_LOCAL_STORAGE_VALUE,
  MY_ACCOUNT_PATH,
  SIGN_IN_PAGE_PATH,
  THEME_LOCAL_STORAGE_KEY,
} from '../../../Constants/Constants'
import { useAuthContext } from '../../../Context/AuthContext'
import { useThemeContext } from '../../../Context/ThemeContext'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { loginValue } = useAuthContext()
  const { isDarkTheme, theme, toggleTheme } = useThemeContext()

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <button className='theme-btn' onClick={() => toggleTheme()}>
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
        {loginValue !== LOG_OUT_LOCAL_STORAGE_VALUE ? (
          <Link className='nav-links' to={MY_ACCOUNT_PATH}>
            My Account
          </Link>
        ) : (
          <Link className='nav-links' to={SIGN_IN_PAGE_PATH}>
            Sign In
          </Link>
        )}
      </ul>
    </div>
  )
}
