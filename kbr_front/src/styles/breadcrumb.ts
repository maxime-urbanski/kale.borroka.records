import styled from 'styled-components'
import { BreadCrumbProps } from '../Interface/Interface'

export const BreadCrumb = styled.ul`
  list-style: none;

  & > li {
    display: inline-block;
    &:before {
      padding: 0 15px;
      content: '>';
    }
  }
`

export const BreadCrumbItem = styled.li.attrs(({ fontSize }: BreadCrumbProps) => ({
  fontSize: fontSize || 20,
}))<{ disable?: boolean }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: Gobold, serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ disable, theme }) => (disable ? '#6c757d' : theme.red)};

  &:first-of-type:before {
    content: '';
    padding: 0;
  }

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    font-size: 10px;
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    font-size: 20px;
  }
  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    font-size: 22px;
  }
`
