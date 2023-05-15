import { useState, useContext } from 'react'
import { createContext } from 'react'
import {
  AUTH_LOCAL_STORAGE_KEY,
  LOG_OUT_LOCAL_STORAGE_VALUE,
} from '../Constants/Constants'
import { getLocalStorage } from '../Utils/getLocalStorage'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [loginValue, setLoginValue] = useState(
    getLocalStorage(AUTH_LOCAL_STORAGE_KEY, LOG_OUT_LOCAL_STORAGE_VALUE)
  )

  const logOut = () => {
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, LOG_OUT_LOCAL_STORAGE_VALUE)
    setLoginValue(LOG_OUT_LOCAL_STORAGE_VALUE)
  }

  const logIn = (userObject) => {
    const userString = JSON.stringify(userObject)
    setLoginValue(userString)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, userString)
  }

  return (
    <AuthContext.Provider
      value={{
        loginValue,
        logOut,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
