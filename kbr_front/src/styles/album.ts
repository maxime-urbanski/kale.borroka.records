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
  margin-left: ${({ mL }) => `${mL}px`};
  margin-right: ${({ mR }) => `${mR}px`};
  margin-top: ${({ mT }) => `${mT}px`};
  margin-bottom: ${({ mB }) => `${mB}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  box-shadow: 1px 4px 8px 6px rgba(26, 26, 26, 0.2);
  -webkit-box-shadow: 1px 4px 8px 6px rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 1px 4px 8px 6px rgba(26, 26, 26, 0.2);

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    width: 250px;
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    width: 350px;
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    width: 400px;
    padding: 10px;
  }
  @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
    width: ${({ width }) => `${width}px`};
  }
`
export const ArticleName = styled.h2.attrs(({ fontSize }: ArticleProps) => ({
  fontSize: fontSize || 20,
}))`
  font-family: Gobold, serif;
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    font-size: 22px;
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    font-size: 26px;
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    font-size: 30px;
  }
  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    font-size: ${({ fontSize }) => fontSize}px;
  }
`

export const Text = styled.p.attrs(({ color, fontSize }: TextProps) => ({
  color: color || 'grey',
  fontSize: fontSize || 20,
}))`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme, color }) => theme[color]};
  font-family: Gobold, serif;
  text-align: justify;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
`

export const ListOl = styled.ol`
  list-style-position: inside;
  margin: 0;
`
export const ListLi = styled.li`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  & > p {
    display: inline-block;
  }
`

export const Select = styled.select`
  width: 50px;
  height: 30px;
  font-size: 16px;
  margin-top: 3px;
`
