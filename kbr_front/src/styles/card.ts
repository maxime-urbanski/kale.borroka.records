import styled from 'styled-components'
import { CardStyledProps } from '../Interface/Interface'

export const Card = styled.article`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 500px;
  border-radius: 5px 5px 1px 1px;
  margin: 3em;
  -webkit-box-shadow: 2px -1px 9px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px -1px 9px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 2px -1px 9px 2px rgba(0, 0, 0, 0.4);
`

export const CardTop = styled.div`
  margin: 0;
  padding: 0;
  height: 300px;
  width: 100%;
  border-bottom: 1px solid #cdc6c6;
`
export const CardImg = styled.img.attrs(({ width, height }: CardStyledProps) => ({
  width: width || '300px',
  height: height || '300px',
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 5px 5px 0 0;
`

export const CardBody = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f7f6f6;
`
export const CardTitle = styled.h4`
  position: relative;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  
  &:hover {
  color: #d9534f;
`
export const CardSubtitle = styled.h5`
  position: relative;
  margin: 10px auto;
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  text-align: center;
`
export const CardButton = styled.div.attrs(({ bg, border, text, position }: CardStyledProps) => ({
  bg: bg || '#b14542',
  border: border || '2px solid #d9534f',
  text: text || '#b14542',
  position: position || '30px',
}))`
  position: absolute;
  width: 80px;
  height: 35px;
  border-radius: 3px;
  background-color: ${({ bg }) => bg};
  color: ${({ text }) => text};
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 15px;
  left: ${({ position }) => position};
  cursor: pointer;
  border: ${({ border }) => border};
`
export const CardIcon = styled.img.attrs(({ width, height, position }: CardStyledProps) => ({
  width: width || '50px',
  height: height || '50px',
  position: position || '10px',
}))`
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  left: ${({ position }) => position};
  bottom: 65px;
`
export const CardPrice = styled.span`
  position: absolute;
  font-size: 40px;
  font-weight: 600;
  bottom: 65px;
  left: 195px;
  color: #f0ad4e;
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
  background-color: #d9534f;
  left: calc(100% - 35px);
  top: 21px;
  transform: translate(-50%, -50%) rotate(45deg);
`
