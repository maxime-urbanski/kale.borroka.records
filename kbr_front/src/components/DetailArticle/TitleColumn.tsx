import { Title3 } from '../../styles/styled'
import RowComponent from '../Layout/RowComponent'

interface TitleColumnProps {
  title: string
  mb?: number
}

const TitleColumn = ({ title, mb }: TitleColumnProps): JSX.Element => (
  <RowComponent xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} mb={mb}>
    <Title3>{title}</Title3>
  </RowComponent>
)

export default TitleColumn
