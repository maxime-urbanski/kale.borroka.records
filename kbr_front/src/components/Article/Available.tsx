import { ColumnArticle, Title3, Button } from '../../styles/styled'
import LittleCard from './LittleCard'
import { AvailableProps } from '../../Interface/Interface'

const test = [
  <LittleCard key={1} />,
  <LittleCard key={2} />,
  <LittleCard key={3} />,
  <LittleCard key={4} />,
]

const Available = ({ area, title }: AvailableProps): JSX.Element => {
  console.log(area[0])
  return (
    <>
      <ColumnArticle area={[area[0], area[1], area[0], area[1]]}>
        <Title3>{title}</Title3>
      </ColumnArticle>
      {test.map((component, index) => {
        const row = index + 2
        return (
          <ColumnArticle area={[row, area[1], row, area[3]]} key={index}>
            {component}
          </ColumnArticle>
        )
      })}
      <ColumnArticle area={[area[2], area[1], area[2], area[3]]}>
        <Button
          bg={'#f0ad4e'}
          color={'white'}
          fontSize={20}
          borderRadius={1}
          width={100}
          height={40}
        >
          details
        </Button>
      </ColumnArticle>
    </>
  )
}

export default Available
