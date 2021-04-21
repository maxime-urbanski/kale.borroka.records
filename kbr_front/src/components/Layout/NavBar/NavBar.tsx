import {
  DropDown,
  DropDownBtn,
  DropDownContent,
  DropDownLink,
  IconNav,
  NavBar,
  NavBarTop,
  NavBarDown,
  NavLink,
  TextNavTop,
} from '../../../styles/navbar'
import NavIcon from './NavIcon'
import { flags, networks, searchAndCart } from '../../Fixture/fixture'

const NavigationBar = (): JSX.Element => {
  return (
    <>
      <NavBar>
        <NavBarTop>
          <IconNav start>
            <NavIcon array={networks} />
          </IconNav>
          <TextNavTop>
            <h2 style={{ fontFamily: 'Soviet Program', fontSize: '2.5em' }}>Black Lives Matters</h2>
          </TextNavTop>
          <IconNav>
            <NavIcon array={flags} />
          </IconNav>
        </NavBarTop>
        <NavBarDown>
          <TextNavTop start={true}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">Production</NavLink>
            <DropDown>
              <DropDownBtn>Le Shop</DropDownBtn>
              <DropDownContent>
                <DropDownLink>lp</DropDownLink>
                <DropDownLink>ep</DropDownLink>
                <DropDownLink>cd</DropDownLink>
                <DropDownLink>tape</DropDownLink>
                <DropDownLink>fanzine</DropDownLink>
              </DropDownContent>
            </DropDown>
          </TextNavTop>
          <IconNav>
            <NavIcon array={searchAndCart} />
          </IconNav>
        </NavBarDown>
      </NavBar>
    </>
  )
}

export default NavigationBar
