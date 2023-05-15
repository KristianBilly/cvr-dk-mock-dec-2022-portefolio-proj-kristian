import { useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { LANDING_PAGE_PATH } from '../../../Constants/Constants'
import { useNavbarContext } from '../../../Context/NavbarContext'
import { TextLink } from '../../Other/TextLink'
import { NavbarLinks } from './NavbarLinks'

export const Navbar = () => {
  const { showLinks, toggleLinks } = useNavbarContext()
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = '0px')
  }, [showLinks])

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <TextLink path={LANDING_PAGE_PATH} text='Virk.dk' virkdk />
          <button className='nav-toggle' onClick={() => toggleLinks()}>
            <FaBars />
          </button>
        </div>
        <NavbarLinks
          linksContainerRef={linksContainerRef}
          linksRef={linksRef}
        />
      </div>
    </nav>
  )
}
