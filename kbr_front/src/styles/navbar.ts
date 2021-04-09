import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  width: 100%;
`

export const NavBarTop = styled.div`
  display: flex;
  height: 60px;
  padding: 0px;
  width: 100%;
`

export const NavBarDown = styled.div`
  justify-content: space-between;
  padding: 0;
  display: flex;
  background-color: #1a1a1a;
  height: 80px;
  width: 100%;
  align-items: center;
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: bold;
  padding: 0px 0px 0px 15px;

  &:hover {
    color: #d9534f;
  }
`

export const IconNav = styled.div<{ start?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
  height: 100%;
  width: 15%;
`

export const ImgNavTop = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`
export const Title = styled.h2`
  font-family: 'Soviet Program';
`

export const TextNavTop = styled.div<{ start?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'center')};
  align-items: center;
  width: 70%;
`

export const HrNavTop = styled.hr`
  border: 1px solid;
  border-color: #d9534f;
  margin: 0;
  transform: rotate(90deg);
  width: 17px;

  &:last-of-type {
    display: none;
  }
`
