import { createContext, useContext, useState } from 'react'

const NavbarContext = createContext()

export const NavbarContextProvider = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => setShowLinks(!showLinks)

  return (
    <NavbarContext.Provider value={{ showLinks, toggleLinks }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarContext = () => useContext(NavbarContext)
