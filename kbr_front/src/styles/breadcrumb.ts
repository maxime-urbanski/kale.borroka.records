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
  font-family: Gobold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ disable, theme }) => (disable ? '#6c757d' : theme.red)};

  &:first-of-type:before {
    content: '';
    padding: 0;
  }
`
