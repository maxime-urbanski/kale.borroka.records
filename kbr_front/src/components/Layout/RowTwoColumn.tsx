import { Column, Row } from '../../styles/styled'
import { GridProps } from '../../Interface/Interface'

interface RowTwoColumnProps extends GridProps {
  firstColumn: JSX.Element
  secondColumn: JSX.Element
}

const RowTwoColumn = ({ firstColumn, secondColumn, position, mb }: RowTwoColumnProps): JSX.Element => {
  return (
    <Row position={position} mb={mb}>
      <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
        {firstColumn}
      </Column>
      <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
        {secondColumn}
      </Column>
    </Row>
  )
}

export default RowTwoColumn
