import { Foot, FooterDown, Copyright } from '../../../styles/footer'
import { networks, about, shop } from '../../Data/data'
import LinkFooter from './LinkFooter'
import { Column, Row, HR } from '../../../styles/styled'
import TitleColumn from '../../DetailArticle/TitleColumn'
import FooterIcon from './FooterIcon'
import FooterNewsletter from './FooterNewsletter'
import RowTwoColumn from '../RowTwoColumn'

const linkComponents = [
  { link: <LinkFooter array={about} key={1} />, title: <TitleColumn title={'A propos'} key={2} /> },
  { link: <LinkFooter array={shop} key={3} />, title: <TitleColumn title={'Le Shop'} key={4} /> },
  {
    link: <FooterIcon icons={networks} />,
    title: <TitleColumn title={'Réseaux Sociaux'} key={6} />,
  },
]

const newsletter = <FooterNewsletter />

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <Foot>
      <Row mb={5}>
        {linkComponents.map(({ title, link }, index) => (
          <Column xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} key={index}>
            {title}
            <HR margin={10} color={'grey'} />
            {link}
          </Column>
        ))}
      </Row>
      <HR margin={50} color={'grey'} />
      <RowTwoColumn
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        xxl={6}
        firstColumn={newsletter}
        secondColumn={newsletter}
        position={'center'}
      />
      <FooterDown>
        <Copyright>{year} Kale Borroka Records All right reserved . 100% DIY !</Copyright>
      </FooterDown>
    </Foot>
  )
}

export default Footer
