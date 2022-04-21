import { BreadCrumb, BreadCrumbItem } from '../../styles/breadcrumb'
import { BreadCrumbProps } from '../../Interface/Interface'
import Link from 'next/link'
import RowOneColumn from './RowOneColumn'

const Breadcrumb = ({ links }: BreadCrumbProps): JSX.Element => {
  return (
    <RowOneColumn position={'start'} mb={50}>
      <BreadCrumb>
        <BreadCrumbItem fontSize={14}>
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
                <BreadCrumbItem fontSize={14} disable key={index}>
                  {link}
                </BreadCrumbItem>
              ) : (
                <BreadCrumbItem fontSize={14} key={index}>
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
