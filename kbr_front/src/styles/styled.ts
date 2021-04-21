import styled from 'styled-components'

export const Title1 = styled.h1`
  font-family: 'Ye Olde Oak';
  font-size: 6em;
  font-weight: 100;
  margin: 0;
  text-align: center;
`
export const Title2 = styled.h2`
  font-family: 'Soviet Program';
  font-size: 3em;
  font-weight: 100;
  margin: 0 10px;
  text-align: center;
`
export const Title3 = styled.h3`
  color: #d9534f;
  font-size: 1.5em;
  font-weight: 600;
  margin: 20px 0 5px 0;
`
export const Title4 = styled.h4`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  margin: 20px 0 5px 0;

  &:hover {
    color: #d9534f;
  }
`

export const Button = styled.button`
  background-color: #d9534f;
  border: none;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  height: 50px;
  width: 100px;

  &:hover {
    background-color: white;
    border: 1px solid #d9534f;
    color: #d9534f;
  }
`
export const Row = styled.div`
  display: flex;
  height: auto;
  width: 100%;
`
export const HR = styled.hr`
  border-bottom: 5px;
  border-color: #d9534f !important;
  border-top: solid !important;
  width: 75%;
`

export const BanLogo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  width: 100wv;
`

export const Container = styled.div<{ fluid?: boolean }>`
  border: 5px solid red;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: ${({ fluid }) => (fluid ? '70%' : '100%')};
`
