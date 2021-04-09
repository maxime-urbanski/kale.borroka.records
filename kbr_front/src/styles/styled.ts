import styled from 'styled-components'

export const Title1 = styled.h1`
  font-family: 'Ye Olde Oak';
  font-size: 6em;
  font-weight: 100;
  text-align: center;
  margin: 0;
`
export const Title2 = styled.h2`
  font-family: 'Soviet Program';
  font-size: 3em;
  font-weight: 100;
  text-align: center;
  margin: 0 10px;
`
export const Title3 = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  color: #d9534f;
  margin: 20px 0 5px 0;
`
export const Title4 = styled.h4`
  font-size: 1.2em;
  font-weight: 600;
  color: white;
  margin: 20px 0 5px 0;

  &:hover {
    color: #d9534f;
  }
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
export const Row = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`
export const HR = styled.hr`
  width: 75%;
  border-top: solid !important;
  border-bottom: 5px;
  border-color: #d9534f !important;
`

export const BanLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  width: 100wv;
`
