import { useState } from 'react'
import { BurgerIcon, NavBarDown, MenuItems, MenuMobile } from '../../../styles/NavBar/navbar'
import NavBarItems from './NavBarItems'

const MobileNavBar = (): JSX.Element => {
  const burger = '/img/menu.svg'
  const closed = '/img/close.svg'
  const [opened, setOpened] = useState(false)
  const [imgSrc, setImgSrc] = useState(burger)
  const handleClick = (): void => {
    setOpened(!opened)
    setImgSrc(opened ? burger : closed)
  }

  return (
    <>
      <MenuMobile>
        <NavBarDown>
          <BurgerIcon onClick={handleClick}>
            <img src={imgSrc} alt={'burger button menu'} width={30} />
          </BurgerIcon>
        </NavBarDown>
        {opened && (
          <MenuItems>
            <NavBarItems />
          </MenuItems>
        )}
      </MenuMobile>
    </>
  )
}

export default MobileNavBar
