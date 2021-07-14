import ArticleDetail from './ArticleDetail'

const details = (props, setQuantity): JSX.Element => (
  <ArticleDetail {...props} setQuantity={setQuantity} />
)

export default details
