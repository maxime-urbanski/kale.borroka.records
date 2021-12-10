import { Title4, ContainerFlex } from '../../../styles/styled'
import { Link } from '../../../Interface/Interface'
import {useState, useEffect} from "react";
import axios from 'axios'

interface LinkFooterProps {
  array?: Link[]
}

const LinkFooter = ({ array }: LinkFooterProps): JSX.Element => {
  const backUrl = process.env.NEXT_PUBLIC_BACK_URL
  const linkSectionCatalog = "youhou";
  console.log(linkSectionCatalog);

  const [ sectionCatalog, setSectionCatalog ] = useState([]);

  useEffect(() => {
    const fetchData = async (slug) => {
      const req = await fetch(`${backUrl}/${slug}`);
      console.log(await req)
      return await req
    }
    fetchData('catalog')
  },[])

  return (
    <ContainerFlex flexDirection={'column'}>
      {array.map(({ name, link }, index) => {
        return (
          <a href={link} key={index}>
            <Title4>{name}</Title4>
          </a>
        )
      })}
    </ContainerFlex>
  )
}

export default LinkFooter
