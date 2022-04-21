import TitleColumn from './TitleColumn'
import Slider from '../Layout/Slider'

const ArticleInformation = (props): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textAlign: 'center' }}>Test</h2>
      <Slider {...props} />
    </div>
  )
}

export default ArticleInformation
