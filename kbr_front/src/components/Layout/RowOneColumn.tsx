import { ReactNode } from 'react'
import { GridProps } from '../../Interface/Interface'
import { Column, Row } from '../../styles/styled'

interface RowComponentProps extends GridProps {
  children: ReactNode
}

const RowOneColumn = ({
  children,
  position = 'center',
  mb,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: RowComponentProps): JSX.Element => {
  console.log(mb)
  return (
    <Row position={position} mb={mb}>
      <Column xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {children}
      </Column>
    </Row>
  )
}

export default RowOneColumn
