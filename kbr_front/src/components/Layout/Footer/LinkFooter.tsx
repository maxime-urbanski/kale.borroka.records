import { Title4, ContainerFlex } from '../../../styles/styled'
import { Link } from '../../../Interface/Interface'

interface LinkFooterProps {
  array?: Link[]
}

const LinkFooter = ({ array }: LinkFooterProps): JSX.Element => {
  return (
    <ContainerFlex flexDirection={'column'}>
      {array.map(({ name, link }, index) => {
        return (
          <a href={link} key={index}>
            <Title4>{name}</Title4>
          </a>
        )
      })}
    </ContainerFlex>
  )
}

export default LinkFooter
