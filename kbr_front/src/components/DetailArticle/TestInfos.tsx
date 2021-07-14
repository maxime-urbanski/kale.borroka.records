import RowOneColumn from '../Layout/RowOneColumn'
import { Text } from '../../styles/album'

const TextInfos = (text: string | Element): JSX.Element => (
  <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} position={'start'}>
    <Text>{text}</Text>
  </RowOneColumn>
)

export default TextInfos
