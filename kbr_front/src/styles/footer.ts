import styled from 'styled-components'

export const Foot = styled.footer`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow: hidden;
  padding: 0;
  width: 100%;
`

export const ColFooter = styled.div<{ full?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  width: ${(props) => (props.full ? '100%' : '33.33%')};
`

export const FooterDown = styled.div`
  align-items: center;
  background-color: #000;
  color: white;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 100%;
`
export const Copyright = styled.p`
  font-size: 1.5em;
`
export const HR = styled.hr`
  border: 2px solid #808080;
  width: 50%;
`
