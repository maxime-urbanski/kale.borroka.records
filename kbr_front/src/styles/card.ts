import styled from 'styled-components'
import { CardStyledProps } from '../Interface/Interface'

export const Card = styled.article.attrs(({ flexDir, width, height }: CardStyledProps) => ({
  flexDir: flexDir || 'column',
  width: width || 300,
  height: height || 500,
}))`
  position: relative;
  width: ${({ width }) => `${width}px`};
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  height: ${({ height }) => `${height}px`};
  margin: 0;
  border-radius: 5px 5px 1px 1px;
  -webkit-box-shadow: 6px 7px 5px -4px #ddd5d5;
  -moz-box-shadow: 6px 7px 5px -4px #ddd5d5;
  box-shadow: 6px 7px 5px -4px #ddd5d5;
`

export const CardTop = styled.div.attrs(({ height, width }: CardStyledProps) => ({
  height: height || 300,
  width: width || 300,
}))`
  margin: 0;
  padding: 0;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  border-bottom: 1px solid #cdc6c6;
`
export const CardImg = styled.img.attrs(({ width, height, borderRadius }: CardStyledProps) => ({
  width: width || 300,
  height: height || 300,
  borderRadius: borderRadius || '5px 5px 0 0',
}))`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => borderRadius};
`

export const CardBody = styled.div.attrs(({ height, width }: CardStyledProps) => ({
  height: height || 200,
  width: width || 300,
}))`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: #f7f6f6;
`
export const CardTitle = styled.h4.attrs(({ fontSize }: CardStyledProps) => ({
  fontSize: fontSize || 18,
}))`
  position: relative;
  margin: 10px auto;
  font-size:  ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  
  &:hover {
  color: #d9534f;
`
export const CardSubtitle = styled.h5.attrs(({ fontSize }: CardStyledProps) => ({
  fontSize: fontSize || 14,
}))`
  position: relative;
  margin: 10px auto;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: #999;
  text-transform: uppercase;
  text-align: center;
`
export const CardButton = styled.div.attrs(({ bg, border, color, left }: CardStyledProps) => ({
  bg: bg || '#b14542',
  border: border || '2px solid #d9534f',
  color: color || '#b14542',
  left: left || 30,
}))`
  position: absolute;
  width: 80px;
  height: 35px;
  border-radius: 3px;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 15px;
  left: ${({ left }) => `${left}px`};
  cursor: pointer;
  border: ${({ border }) => border};
`
export const CardIcon = styled.img.attrs(({ width, height, left }: CardStyledProps) => ({
  width: width || 50,
  height: height || 50,
  left: left || 10,
}))`
  position: absolute;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  left: ${({ left }) => `${left}px`};
  bottom: 65px;
`
export const CardPrice = styled.span.attrs(({ fontSize, bottom, left }: CardStyledProps) => ({
  fontSize: fontSize || 40,
  bottom: bottom || 65,
  left: left || 195,
}))`
  position: absolute;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 600;
  bottom: ${({ bottom }) => `${bottom}px`};
  left: ${({ left }) => `${left}px`};
  color: ${({ theme }) => theme.yellow};
`
export const Overlay = styled.div`
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const Ribbon = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  color: white;
  padding: 4px 5px 6px 25px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  background-color: #763538;
  left: calc(100% - 35px);
  top: 21px;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: 1;
`
