import {
  Card,
  CardBody,
  CardButton,
  CardIcon,
  CardImg,
  CardPrice,
  CardSubtitle,
  CardTitle,
  CardTop,
} from '../../styles/card'

const CardArticle = (): JSX.Element => {
  return (
    <>
      <Card>
        <CardTop>
          <CardImg src="/img/1725109.jpg" alt="cover" />
        </CardTop>
        <CardBody>
          <CardTitle>moscow death brigade</CardTitle>
          <CardSubtitle>bad accents anthems</CardSubtitle>
          <CardIcon src={'/img/vinyl.svg'} position={'45px'} />
          <CardPrice>13€</CardPrice>
          <CardButton bg={'white'}>Details</CardButton>
          <CardButton position={'185px'} text={'white'} border={'none'}>
            Panier
          </CardButton>
        </CardBody>
      </Card>
    </>
  )
}

export default CardArticle
