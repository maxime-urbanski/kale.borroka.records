import styled from 'styled-components'
import { ArticleProps, PictureProps } from '../Interface/Interface'

export const Picture = styled.img.attrs(
  ({ width, height, mR, mL, mT, mB, borderRadius }: PictureProps) => ({
    width: width || 300,
    height: height || 300,
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
  text-decoration: underline ${({ theme }) => theme.red};
`
