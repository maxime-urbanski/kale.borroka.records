import {
  DropDown,
  DropDownBtn,
  DropDownContent,
  DropDownLink,
} from '../../../styles/NavBar/dropdown'

const Dropdown = (): JSX.Element => {
  return (
    <DropDown>
      <DropDownBtn href={'/catalog'}>Le Shop</DropDownBtn>
      <DropDownContent>
        <DropDownLink href={'/catalog/lp'}>lp</DropDownLink>
        <DropDownLink href={'/catalog/ep'}>ep</DropDownLink>
        <DropDownLink href={'/catalog/cd'}>cd</DropDownLink>
        <DropDownLink href={'/catalog/tape'}>tape</DropDownLink>
        <DropDownLink href={'/catalog/fanzine'}>fanzine</DropDownLink>
      </DropDownContent>
    </DropDown>
  )
}

export default Dropdown
