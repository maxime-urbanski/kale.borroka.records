import { Title3 } from '../../../styles/styled'
import { FooterTitle, HR } from '../../../styles/footer'
import { FooterProps } from '../../../Interface/Interface'

interface Title extends FooterProps {
  title?: string
}

const Title = ({ start, end, title }: Title): JSX.Element => {
  return (
    <FooterTitle start={start} end={end}>
      <Title3>{title}</Title3>
      <HR />
    </FooterTitle>
  )
}

export default Title
