import { ContainerFlex } from '../../../styles/styled'
import { IconsProps } from '../../../Interface/Interface'
import { IconFooter } from '../../../styles/footer'

interface FooterIconProps {
  icons: IconsProps[]
}

const FooterIcon = ({ icons }: FooterIconProps): JSX.Element => {
  return (
    <ContainerFlex flexDirection={'column'}>
      {icons.map(({ name, img, url }, index) => (
        <a href={url} target={'_blank'} key={index}>
          <IconFooter src={img} alt={name} />
        </a>
      ))}
    </ContainerFlex>
  )
}

export default FooterIcon
