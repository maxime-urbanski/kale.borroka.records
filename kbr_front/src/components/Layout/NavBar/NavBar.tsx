import { IconNav, NavBar, NavBarTop, TextNavTop, Title } from '../../../styles/NavBar/navbar'
import { flags, networks } from '../../Data/data'
import NavIcon from './NavIcon'
import MobileNavBar from './MobileNavBar'
import DesktopNavBar from './DesktopNavBar'

const NavigationBar = (): JSX.Element => {
  return (
    <NavBar>
      <NavBarTop>
        <IconNav start>
          <NavIcon array={networks} />
        </IconNav>
        <TextNavTop>
          <Title style={{margin: "0"}}>Black Lives Matters</Title>
        </TextNavTop>
        <IconNav>
          <NavIcon array={flags} />
        </IconNav>
      </NavBarTop>
      <MobileNavBar />
      <DesktopNavBar />
    </NavBar>
  )
}

export default NavigationBar
