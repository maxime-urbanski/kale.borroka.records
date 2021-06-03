import { BreadCrumb, BreadCrumbItem } from '../../styles/breadcrumb'
import { BreadCrumbProps } from '../../Interface/Interface'
import Link from 'next/link'
import RowComponent from './RowComponent'

const Breadcrumb = ({ array }: BreadCrumbProps): JSX.Element => {
  return (
    <RowComponent position={'start'} mb={100} xs={12} sm={12} md={12} lg={12}xl={12} xxl={12}>
      <BreadCrumb>
        <BreadCrumbItem>
          <Link href={'/'}>kale borroka records</Link>
        </BreadCrumbItem>
        {array.map((link, index) => {
          const lastItem: string = array
            .map((link) => link)
            .slice(-1)
            .toString()
          const checkLastItem = lastItem === link
          return (
            <>
              {checkLastItem ? (
                <BreadCrumbItem disable key={index}>
                  {link}
                </BreadCrumbItem>
              ) : (
                <BreadCrumbItem key={index}>
                  <Link href={`/${link}`}>{link}</Link>
                </BreadCrumbItem>
              )}
            </>
          )
        })}
      </BreadCrumb>
    </RowComponent>
  )
}

export default Breadcrumb
