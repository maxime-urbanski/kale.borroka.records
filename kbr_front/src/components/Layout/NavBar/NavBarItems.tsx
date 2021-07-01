import { TextNavTop, NavLink } from '../../../styles/NavBar/navbar'
import Dropdown from './Dropdown'

const NavBarItems = (): JSX.Element => (
  <>
    <TextNavTop start={true}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/">Production</NavLink>
      <Dropdown />
    </TextNavTop>
  </>
)

export default NavBarItems
