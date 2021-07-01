import {
  DropDown,
  DropDownBtn,
  DropDownContent,
  DropDownLink,
} from '../../../styles/NavBar/dropdown'

const Dropdown = (): JSX.Element => {
  return (
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
  )
}

export default Dropdown
