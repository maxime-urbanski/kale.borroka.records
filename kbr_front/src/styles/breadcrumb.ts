import styled from 'styled-components'

export const BreadCrumb = styled.ul`
  list-style: none;
  padding: 0;

  & > li {
    display: inline-block;
    &:before {
      padding: 0 15px;
      content: '>';
    }
  }
`

export const BreadCrumbItem = styled.li<{ disable?: boolean }>`
  font-family: Gobold, serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ disable, theme }) => (disable ? '#6c757d' : theme.red)};

  &:first-of-type:before {
    content: '';
    padding: 0;
  }

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    font-size: 8px;
  }
  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    font-size: 10px;
  }
  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    font-size: 12px;
  }
  @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
    font-size: 14px;
  }
  @media (min-width: ${({ theme }) => `${theme.xxl}px`}) {
    font-size: 16px;
  }
`
