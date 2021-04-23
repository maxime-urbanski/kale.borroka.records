import styled from 'styled-components'
import { FooterProps } from '../Interface/Interface'

export const Foot = styled.footer`
  background-color: ${({ theme }) => theme.black};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 80px auto 80px 200px auto;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  height: auto;
  overflow: hidden;
  padding: 0;
  margin: 50px 0 0;
  width: 100%;
`

export const FooterLink = styled.div.attrs(({ start, end, row }: FooterProps) => ({
  start: start || 1,
  end: end || 3,
  row: row || 1,
}))`
  display: grid;
  justify-items: center;
  grid-column: ${({ start }) => start} / ${({ end }) => end};
  grid-row-start: ${({ row }) => row};
`

export const FooterDown = styled.div`
  background-color: #000;
  display: grid;
  justify-items: center;
  grid-row-start: 5;
  grid-column: 1 / 7;
`

export const HR = styled.hr`
  border-top: 1px solid #808080;
  width: 50%;
  background-color: #808080;
  border-radius: 20px;
`

export const FooterTitle = styled.div.attrs(({ start, end }: FooterProps) => ({
  start: start || 1,
  end: end || 3,
}))`
  grid-column: ${({ start }) => start} / ${({ end }) => end};
  justify-items: center;
  display: grid;
`

export const FooterIcon = styled.img`
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 5px;

  &:hover {
    transform: scale(1.3);
  }
`

export const Copyright = styled.p`
  color: white;
  font-family: Gobold;
  font-size: 18px;
`
