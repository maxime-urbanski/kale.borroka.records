import { Column, Row } from '../../styles/styled'
import { GridProps } from '../../Interface/Interface'

interface RowTwoColumnProps extends GridProps {
  firstColumn: JSX.Element
  secondColumn: JSX.Element
}

const RowTwoColumn = ({
  firstColumn,
  secondColumn,
  position,
  mb,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: RowTwoColumnProps): JSX.Element => {
  const test: number = 12 - xl
  console.log('test', test)
  return (
    <Row position={position} mb={mb}>
      <Column xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {firstColumn}
      </Column>
      <Column xs={xs} sm={sm} md={md} lg={12 - lg} xl={12 - xl} xxl={test}>
        {secondColumn}
      </Column>
    </Row>
  )
}

export default RowTwoColumn
