import styled from 'styled-components'
import {ArticleProps, ContainerFlexProps, PictureProps, TextProps} from '../Interface/Interface'

export const Picture = styled.img.attrs(
  ({ width, height, mR, mL, mT, mB, borderRadius }: PictureProps) => ({
    width: width || 300,
    height: height || width,
    mR: mR || 0,
    mL: mL || 0,
    mT: mT || 0,
    mB: mB || 0,
    borderRadius: borderRadius || 0,
  })
)`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin-left: ${({ mL }) => `${mL}px`};
  margin-right: ${({ mR }) => `${mR}px`};
  margin-top: ${({ mT }) => `${mT}px`};
  margin-bottom: ${({ mB }) => `${mB}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
`
export const ArticleName = styled.h2.attrs(({ fontSize }: ArticleProps) => ({
  fontSize: fontSize || 20,
}))`
  font-family: Gobold, serif;
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

export const Text = styled.p.attrs(({ color, fontSize }: TextProps) => ({
  color: color || 'grey',
  fontSize: fontSize || 20,
}))`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme, color }) => theme[`${color}`]};
  font-family: Gobold, serif;
  margin: 5px;
  text-align: center;
`

export const ListOl = styled.ol`
  list-style-position: inside;
`
export const ListLi = styled.li`
  padding-left: 15px;
  padding-right: 15px;

  & > p {
    display: inline-block;
  }
`

export const ContainerFlex = styled.div.attrs(({ flexDirection }: ContainerFlexProps) => ({
  flexDirection: flexDirection || 'row',
}))`
  display: flex;
  flex-direction: ${({ flexDirection}) => flexDirection};
  justify-content: center;
`

export const Price = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.yellow};
`

export const Select = styled.select`
  width: 50px;
  height: 30px;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 4px;
`
