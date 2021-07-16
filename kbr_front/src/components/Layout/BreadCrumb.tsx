import { BreadCrumb, BreadCrumbItem } from '../../styles/breadcrumb'
import { BreadCrumbProps } from '../../Interface/Interface'
import Link from 'next/link'
import RowOneColumn from './RowOneColumn'

const Breadcrumb = ({ links }: BreadCrumbProps): JSX.Element => {
  return (
    <RowOneColumn position={'start'} mb={50} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
      <BreadCrumb>
        <BreadCrumbItem>
          <Link href={'/'}>kale borroka records</Link>
        </BreadCrumbItem>
        {links.map((link, index) => {
          const lastItem: string = links
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
                <BreadCrumbItem key={index * 10}>
                  <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                </BreadCrumbItem>
              )}
            </>
          )
        })}
      </BreadCrumb>
    </RowOneColumn>
  )
}

export default Breadcrumb
