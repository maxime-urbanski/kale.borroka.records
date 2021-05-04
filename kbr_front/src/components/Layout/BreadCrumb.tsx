import { BreadCrumb, BreadCrumbItem } from '../../styles/breadcrumb'
import Link from 'next/link'
import { BreadCrumbProps } from '../../Interface/Interface'

const Breadcrumb = ({ array }: BreadCrumbProps): JSX.Element => {
  return (
    <>
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
                <BreadCrumbItem>
                  <Link href={`/${link}`}>{link}</Link>
                </BreadCrumbItem>
              )}
            </>
          )
        })}
      </BreadCrumb>
    </>
  )
}

export default Breadcrumb
