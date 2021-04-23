import { Title4 } from '../../../styles/styled'
import { FooterLink } from '../../../styles/footer'
import { FooterProps, Link } from '../../../Interface/Interface'

interface LinkFoot extends FooterProps {
  array?: Link[]
}

const LinkFooter = ({ array, start, end, row }: LinkFoot): JSX.Element => {
  return (
    <FooterLink start={start} end={end} row={row}>
      {array.map(({ name, link }, index) => {
        return (
          <a href={link} key={index}>
            <Title4>{name}</Title4>
          </a>
        )
      })}
    </FooterLink>
  )
}

export default LinkFooter
