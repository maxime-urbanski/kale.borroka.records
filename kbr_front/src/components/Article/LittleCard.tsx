import {
  Card,
  CardTop,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardPrice,
  CardButton,
  Ribbon,
  Overlay,
} from '../../styles/card'
import RibbonCard from '../Article/Ribbon'


const LittleCard = (): JSX.Element => {
  return (
    <Card width={400} height={150} flexDir={'row'}>
      <CardTop height={150} width={150}>
        <CardImg
          src={'/img/1725109.jpg'}
          alt={'cover'}
          width={150}
          height={150}
          borderRadius={'5px 0 0 5px'}
        />
      </CardTop>
      <CardBody height={150} width={250}>
        <RibbonCard kbrNum={1} kbrProd={true} />
        <CardTitle fontSize={16}>moscow death brigade</CardTitle>
        <CardSubtitle>bad accents anthems</CardSubtitle>
        <CardPrice left={170} bottom={15} fontSize={30}>
          13€
        </CardPrice>
        <CardButton left={300} color={'white'} border={'none'}>
          Details
        </CardButton>
      </CardBody>
    </Card>
  )
}

export default LittleCard
