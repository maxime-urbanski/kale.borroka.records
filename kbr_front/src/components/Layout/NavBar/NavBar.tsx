import {
  IconNav,
  NavBar,
  NavBarTop,
  NavBarDown,
  NavLink,
  TextNavTop,
  Title,
} from '../../../styles/navbar'
import NavIcon from './NavIcon'
import { flags, networks, searchAndCart } from '../../Data/data'
import Dropdown from './Dropdown'
import ResponsiveNavBar from "./ResponsiveNavBar";

const NavigationBar = (): JSX.Element => {
  return (
    <NavBar>
      <NavBarTop>
        <IconNav start>
          <NavIcon array={networks} />
        </IconNav>
        <TextNavTop>
          <Title>Black Lives Matters</Title>
        </TextNavTop>
        <IconNav>
          <NavIcon array={flags} />
        </IconNav>
      </NavBarTop>
      <NavBarDown>
        <TextNavTop start={true}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Production</NavLink>
          <Dropdown />
        </TextNavTop>
        <IconNav>
          <NavIcon array={searchAndCart} />
        </IconNav>
      </NavBarDown>
      <ResponsiveNavBar />
    </NavBar>
  )
}

export default NavigationBar
