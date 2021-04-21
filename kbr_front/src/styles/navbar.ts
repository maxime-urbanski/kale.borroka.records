import styled from 'styled-components'

export const NavBar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 140px;
  margin-bottom: 800px;
  position: fixed;
  width: 100%;
  z-index: 1;
`

export const NavBarTop = styled.div`
  display: flex;
  height: 60px;
  padding: 0px;
  width: 100%;
`

export const NavBarDown = styled.div`
  align-items: center;
  background-color: #1a1a1a;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`

export const NavLink = styled.a`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 0px 0px 0px 15px;
  text-decoration: none;

  &:hover {
    color: #d9534f;
  }
`

export const IconNav = styled.div<{ start?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
  width: 15%;
`

export const ImgNavTop = styled.img`
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  margin: 10px;
  width: 30px;

  &:hover {
    transform: scale(1.3);
  }
`
export const Title = styled.h2`
  font-family: 'Soviet Program';
`

export const TextNavTop = styled.div<{ start?: boolean }>`
  align-items: center;
  display: flex;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'center')};
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
export const DropDown = styled.div`
  display: inline-block;
  margin-top: 1px;
  position: relative;

  &:hover > div {
    display: block;
  }
`
export const DropDownBtn = styled.a`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 100%;
  margin-left: 15px;
  padding-bottom: 28.5px;
  width: 100%;

  &:hover {
    color: #d9534f;
  }
`

export const DropDownContent = styled.div`
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: none;
  margin-top: 28px;
  min-width: 160px;
  position: absolute;
  z-index: 1;
`
export const DropDownLink = styled.a`
  display: block;
  color: black;
  cursor: pointer;
  font-size: 20px;
  padding: 12px 16px;
  text-transform: uppercase;

  &:hover {
    background-color: #f1f1f1;
  }
`
