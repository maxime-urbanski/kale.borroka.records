import { Overlay, Ribbon } from '../../styles/card'

interface RibbonProps {
  kbrNum: number
  kbrProd: boolean
}

const numberProduction = (productionNum: number) => {
  let prodNum: number | string = 0
  if (9 > productionNum) {
    prodNum = '0' + productionNum
  } else {
    prodNum = productionNum
  }
  return `KBR#${prodNum}`
}

const RibbonCard = ({ kbrNum, kbrProd }: RibbonProps): JSX.Element => {
  return (
    <>
      {kbrProd && (
        <Overlay>
          <Ribbon>{numberProduction(kbrNum)}</Ribbon>
        </Overlay>
      )}
    </>
  )
}

export default RibbonCard
