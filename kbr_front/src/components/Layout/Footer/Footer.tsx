import { IconsProps, Link } from '../../../Interface/Interface'
import { ColFooter, Copyright, Foot, FooterDown, HR } from '../../../styles/footer'
import { Title3, Row, Title4 } from '../../../styles/styled'
import { networks, propos, shop } from '../../Fixture/fixture'
import Image from 'next/image'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <>
      <Foot>
        <Row>
          <ColFooter>
            <Title3>À PROPOS</Title3>
            <HR />
            {propos.map(({ name, link }: Link, index: number) => {
              return (
                <a href={link} key={index}>
                  <Title4>{name}</Title4>
                </a>
              )
            })}
          </ColFooter>
          <ColFooter>
            <Title3>LE SHOP</Title3>
            <HR />
            {shop.map(({ name, link }: Link, index: number) => {
              return (
                <a href={link} key={index}>
                  <Title4>{name}</Title4>
                </a>
              )
            })}
          </ColFooter>
          <ColFooter>
            <Title3>RÉSEAUX SOCIAUX</Title3>
            <HR />
            {networks.map(({ name, img, url }: IconsProps, index: number) => {
              return (
                <a href={url} target="_blank" key={index} rel="noreferrer">
                  <Image src={img} alt={name} width={'50px'} height={'50px'} />
                </a>
              )
            })}
          </ColFooter>
        </Row>
        <Row>
          <ColFooter full>
            <Title3>NOS AMIS</Title3>
            <HR />
          </ColFooter>
        </Row>
      </Foot>
      <FooterDown>
        <Copyright>{year} Kale Borroka Records All right reserved . 100% DIY !</Copyright>
      </FooterDown>
    </>
  )
}

export default Footer
