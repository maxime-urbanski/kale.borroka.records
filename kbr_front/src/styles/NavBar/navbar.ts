import styled from 'styled-components'

export const NavBar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
`

export const NavBarTop = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
`

export const NavBarDown = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`

export const NavLink = styled.a`
  color: white;
  font-family: Gobold, serif;
  font-size: 25px;
  font-weight: 100;
  letter-spacing: 2px;
  padding: 0 15px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.red};
  }

  @media (max-width: 991px) {
    color: ${({ theme }) => theme.black};
    margin: 10px;

    &:hover {
      color: ${({ theme }) => theme.red};
    }
  }
`

export const IconNav = styled.div<{ start?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
  width: 15%;
  
  @media (max-width: 991px) {
    display: none;
    width: 0;
  }
`

export const ImgNavTop = styled.img`
  border-radius: 50px;
  cursor: pointer;
  height: 30px;
  margin: 10px;
  width: 30px;
  font-weight: bold;

  &:hover {
    transform: scale(1.3);
  }
  
`
export const Title = styled.h2`
  font-family: 'Gobold', serif;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 991px) {
    font-size: 30px;
  }
`

export const TextNavTop = styled.div<{ start?: boolean }>`
  align-items: center;
  display: flex;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'center')};
  width: 70%;

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
  }
`

export const HrNavTop = styled.hr`
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.red};
  margin: 0;
  transform: rotate(90deg);
  width: 17px;

  &:last-of-type {
    display: none;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

export const MenuMobile = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`
export const MenuItems = styled.div`
  display: flex;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 6px 11px 3px #676767;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  &:before {
    transition: margin-bottom 2s;
  }
`

export const MenuDesktop = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const BurgerIcon = styled.button`
  background-color: transparent;
  border: none;
  margin: 20px;
  cursor: pointer;
`
