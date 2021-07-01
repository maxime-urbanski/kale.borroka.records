import styled from 'styled-components'

export const DropDown = styled.div`
  display: inline-block;
  margin-top: 1px;
  position: relative;

  &:hover > div {
    display: block;
  }
  @media (max-width: ${({ theme }) => `${theme.lg}px`}) {
    margin: 10px;
  }
`
export const DropDownBtn = styled.a`
  border: none;
  color: white;
  cursor: pointer;
  font-family: Gobold, serif;
  font-size: 25px;
  font-weight: 100;
  height: 100%;
  letter-spacing: 2px;
  margin-left: 15px;
  padding-bottom: 23px;
  width: 100%;
  &:hover {
    color: ${({ theme }) => theme.red};
  }

  @media (max-width: 991px) {
    color: ${({ theme }) => theme.black};
    margin: 0;
  }
`

export const DropDownContent = styled.div`
  background-color: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: none;
  margin-top: 23px;
  min-width: 160px;
  position: absolute;
  z-index: 1;

  @media (max-width: ${({ theme }) => `${theme.lg}px`}) {
    margin-top: 10px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
  }
`
export const DropDownLink = styled.a`
  display: block;
  color: black;
  cursor: pointer;
  font-size: 20px;
  padding: 12px 16px;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.grey};
  }
`
