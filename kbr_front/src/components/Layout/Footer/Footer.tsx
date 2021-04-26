import { Foot, FooterLink, FooterIcon, FooterDown, Copyright } from '../../../styles/footer'
import { networks, about, shop } from '../../Data/data'
import LinkFooter from './LinkFooter'
import Title from './FooterTitle'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <>
      <Foot>
        <Title start={1} end={3} title={'A Propos'} />
        <Title start={3} end={5} title={'Le Shop'} />
        <Title start={5} end={7} title={'Reseau Sociaux'} />
        <LinkFooter array={about} start={1} end={3} row={2} />
        <LinkFooter row={2} start={3} end={5} array={shop} />
        <FooterLink start={5} end={7} row={2}>
          {networks.map(({ name, img, url }, index) => {
            return (
              <a href={url} key={index}>
                <FooterIcon src={img} alt={name} />
              </a>
            )
          })}
        </FooterLink>
        <Title row={3} start={1} end={7} title={'Friend'} />
        <FooterDown>
          <Copyright>{year} Kale Borroka Records All right reserved . 100% DIY !</Copyright>
        </FooterDown>
      </Foot>
    </>
  )
}

export default Footer
