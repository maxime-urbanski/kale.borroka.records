import styled from 'styled-components'
import { FooterProps } from '../Interface/Interface'

export const Foot = styled.footer`
  background-color: ${({ theme }) => theme.black};
  width: 100%;
  padding-top: 50px;
`

export const FooterDown = styled.div`
  background-color: #000;
  display: grid;
  justify-items: center;
  grid-row-start: 5;
  grid-column: 1 / 7;
`

export const FooterTitle = styled.div.attrs(({ start, end }: FooterProps) => ({
  start: start || 1,
  end: end || 3,
}))`
  grid-column: ${({ start }) => start} / ${({ end }) => end};
  justify-items: center;
  display: grid;
`

export const Copyright = styled.p`
  color: white;
  font-family: Gobold, serif;
  font-size: 18px;
`
export const IconFooter = styled.img.attrs(({ width }) => ({
  width: width || 45,
}))`
  width: ${({ width }) => width}px;
  border-radius: 50px;
  margin: 10px auto;
`
