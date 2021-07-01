import TitleColumn from '../../DetailArticle/TitleColumn'
import { ContainerFlex, HR } from '../../../styles/styled'
import { paymentAndSent } from '../../Data/data'
import { IconFooter } from '../../../styles/footer'

const FooterSendAndPayment = (): JSX.Element => (
  <>
    <TitleColumn title={'Envoie et paiement'} />
    <HR margin={10} color={'grey'} />
    <ContainerFlex flexDirection={'column'} justifyContent={'start'} alignItems={'center'}>
      {paymentAndSent.map(({ name, img }, index) => (
        <IconFooter src={img} alt={name} key={index} width={60} />
      ))}
    </ContainerFlex>
  </>
)

export default FooterSendAndPayment
