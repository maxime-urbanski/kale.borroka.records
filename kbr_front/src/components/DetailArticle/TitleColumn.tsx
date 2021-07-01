import { Title3 } from '../../styles/styled'
import RowOneColumn from '../Layout/RowOneColumn'
import {GridProps} from "../../Interface/Interface";

interface TitleColumnProps extends GridProps {
  title: string
  mb?: number
}

const TitleColumn = ({ title, mb, position }: TitleColumnProps): JSX.Element => (
  <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} mb={mb} position={position}>
    <Title3>{title}</Title3>
  </RowOneColumn>
)

export default TitleColumn
