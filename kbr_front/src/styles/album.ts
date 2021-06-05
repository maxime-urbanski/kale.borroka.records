import styled from 'styled-components'
import { ArticleProps, ContainerFlexProps, PictureProps, TextProps } from '../Interface/Interface'

export const Picture = styled.img.attrs(
  ({ width, mR, mL, mT, mB, borderRadius }: PictureProps) => ({
    width: width || 300,
    mR: mR || 0,
    mL: mL || 0,
    mT: mT || 0,
    mB: mB || 0,
    borderRadius: borderRadius || 0,
  })
)`
  width: ${({ width }) => `${width}px`};
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
  text-align: justify;
  padding: 5px;
  margin: 0;
`

export const ListOl = styled.ol`
  list-style-position: inside;
  margin: 0;
`
export const ListLi = styled.li`
  padding-left: 15px;
  padding-right: 15px;

  & > p {
    display: inline-block;
  }
`

export const ContainerFlex = styled.div.attrs(
  ({ flexDirection, alignItems }: ContainerFlexProps) => ({
    flexDirection: flexDirection || 'row',
    alignItems: alignItems || 'center',
  })
)`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
`

export const Price = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.yellow};
`

export const Select = styled.select`
  width: 50px;
  height: 30px;
  font-size: 16px;
  margin-top: 3px;
`
