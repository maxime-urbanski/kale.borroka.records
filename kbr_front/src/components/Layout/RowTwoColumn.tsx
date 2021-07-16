import { Column, Row } from '../../styles/styled'
import { GridProps } from '../../Interface/Interface'
import { FC } from 'react'

interface RowTwoColumnProps extends GridProps {
  firstColumn: JSX.Element | FC
  secondColumn: JSX.Element | FC
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
  return (
    <Row position={position} mb={mb}>
      <Column xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {firstColumn}
      </Column>
      <Column xs={xs} sm={sm} md={md} lg={12 - lg} xl={12 - xl} xxl={12 - xxl}>
        {secondColumn}
      </Column>
    </Row>
  )
}

export default RowTwoColumn
