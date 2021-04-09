import styled from 'styled-components'

export const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  padding: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
`

export const ColFooter = styled.div<{ full?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.full ? '100%' : '33.33%')};
  height: auto;
`

export const FooterDown = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 40px;
`
export const Copyright = styled.p`
  font-size: 1.5em;
`
export const HR = styled.hr`
  border: 2px solid #808080;
  width: 50%;
`
