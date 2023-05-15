import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { MainContainer } from './MainContainer/MainContainer'
import { Navbar } from './Navbar/Navbar'
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper'

export const Layout = () => (
  <ThemeWrapper>
    <Navbar />
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
    <Footer />
  </ThemeWrapper>
)
