import {
  IconNav,
  ImgNavTop,
  NavBar,
  NavBarTop,
  NavBarDown,
  NavLink,
  HrNavTop,
  TextNavTop,
} from '../styles/navbar'

const networks = [
  {
    name: 'Facebook',
    img: '/img/Social/fb.svg',
    url: 'https://www.facebook.com/kale.borroka.records/',
  },
  {
    name: 'Protonmail',
    img: '/img/Social/pt.svg',
    url: 'mailto: kale.borroka.records@protonmail.com',
  },
  {
    name: 'Youtube',
    img: '/img/Social/yt.svg',
    url: 'https://www.youtube.com/playlist?list=PLpM-GGKpwdHrT6RpoqsHT2HVGoPet2sB-',
  },
]

const flags = [
  {
    name: 'Français',
    img: '/img/Flag/fr.svg',
  },
  {
    name: 'Euskadi',
    img: '/img/Flag/eu.svg',
  },
  {
    name: 'English',
    img: '/img/Flag/en.svg',
  },
]

const searchAndCart = [
  {
    name: 'Search',
    img: '/img/search.svg',
  },
  {
    name: 'Cart',
    img: '/img/cart.svg',
  },
]

interface IconsProps {
  index?: number
  name: string
  img: string
  url?: string
}

const NavigationBar = (): JSX.Element => {
  return (
    <>
      <NavBar>
        <NavBarTop>
          <IconNav>
            {networks.map(({ name, img, url }: IconsProps) => {
              return (
                <>
                  <a href={url}>
                    <ImgNavTop src={img} alt={name} />
                  </a>
                  <HrNavTop />
                </>
              )
            })}
          </IconNav>
          <TextNavTop>
            <h2 style={{ fontFamily: 'Soviet Program', fontSize: '2.5em' }}>Black Lives Matters</h2>
          </TextNavTop>
          <IconNav position>
            {flags.map(({ name, img }: IconsProps) => {
              return (
                <>
                  <ImgNavTop src={img} alt={name} />
                  <HrNavTop />
                </>
              )
            })}
          </IconNav>
        </NavBarTop>
        <NavBarDown>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <IconNav position>
            {searchAndCart.map(({ name, img }: IconsProps) => {
              return (
                <>
                  <ImgNavTop src={img} alt={name} />
                  <HrNavTop />
                </>
              )
            })}
          </IconNav>
        </NavBarDown>
      </NavBar>
    </>
  )
}

export default NavigationBar
