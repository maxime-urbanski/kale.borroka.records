import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4em;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #d9534f;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  width: 100px;
  height: 50px;

  &:hover {
    background-color: white;
    border: 1px solid #d9534f;
    color: #d9534f;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  width: 100%;
`;

export const NavBarTop = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
`;

export const NavBarDown = styled.div`
  padding: 0px 0 0 15px;
  display: flex;
  background-color: #1a1a1a;
  height: 80px;
  width: 100%;
  align-items: center;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: bold;
  padding: 0px;

  &:hover {
    color: #d9534f;
  }
`;
