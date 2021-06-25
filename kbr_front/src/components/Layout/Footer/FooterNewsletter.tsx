import TitleColumn from '../../DetailArticle/TitleColumn'
import { Button, ContainerFlex, HR, Title4, Input } from '../../../styles/styled'

const FooterNewsletter = (): JSX.Element => {
  return (
    <>
      <TitleColumn title={'Newsletter'} />
      <HR margin={10} color={'grey'} />
      <ContainerFlex flexDirection={'column'} justifyContent={'start'}>
        <Title4>Inscrit toi à la newsletter</Title4>
        <ContainerFlex>
          <Input type={'text'} placeholder={'kale.borroka.records@protonmail.com'} />
          <Button>Envoyer</Button>
        </ContainerFlex>
      </ContainerFlex>
    </>
  )
}

export default FooterNewsletter
