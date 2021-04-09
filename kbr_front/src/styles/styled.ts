import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 4em;
  text-align: center;
`

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
`

export const HR = styled.hr`
  width: 75%;
  border-top: solid !important;
  border-bottom: 5px;
  border-color: #d9534f !important;
`
