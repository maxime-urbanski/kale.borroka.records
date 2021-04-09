import React from 'react'
import { HrNavTop, ImgNavTop } from '../../../styles/navbar'
import { IconsProps } from '../../../Interface/Interface'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NavIcon = ({ array }): JSX.Element => {
  return (
    <>
      {array.map(({ name, img, url }: IconsProps, index: number) => {
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
