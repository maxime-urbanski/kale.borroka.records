import { useState } from 'react'
import { NavBarDown, IconNav } from '../../../styles/navbar'

const ResponsiveNavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false)
  const handleClick = (): void => setOpened(!opened)
  const img = '/img/menu.svg'
  return (
    <NavBarDown>
      <button onClick={handleClick} style={{ backgroundColor: 'transparent', border: 'none' }}>
        <img src={img} alt={'burger menu'} />
      </button>
    </NavBarDown>
  )
}

export default ResponsiveNavBar
