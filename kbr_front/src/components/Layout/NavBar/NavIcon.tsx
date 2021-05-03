import React from 'react'
import { HrNavTop, ImgNavTop } from '../../../styles/navbar'
import { IconsProps, NavProps } from '../../../Interface/Interface'

const NavIcon = ({ array }: NavProps): JSX.Element => {
  return (
    <>
      {array.map(({ name, img, url }, index: number) => {
        return (
          <>
            <a href={url} key={index}>
              <ImgNavTop src={img} alt={name} />
            </a>
            <HrNavTop />
          </>
        )
      })}
    </>
  )
}

export default NavIcon
