import { IconNav, NavBarDown, MenuDesktop } from '../../../styles/NavBar/navbar'
import NavBarItems from './NavBarItems'
import NavIcon from './NavIcon'
import { searchAndCart } from '../../Data/data'

const DesktopNavBar = () => {
  return (
    <MenuDesktop>
      <NavBarDown>
        <NavBarItems />
        <IconNav>
          <NavIcon array={searchAndCart} />
        </IconNav>
      </NavBarDown>
    </MenuDesktop>
  )
}

export default DesktopNavBar
