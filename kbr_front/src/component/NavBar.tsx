import {
  IconNavTop,
  ImgNavTop,
  NavBar,
  NavBarTop,
  NavBarDown,
  NavLink,
  HrNavTop,
} from "../styles/navbar";

const networks = [
  {
    name: "Facebook",
    img: "/img/Social/fb.svg",
    url: "https://www.facebook.com/kale.borroka.records/",
  },
  {
    name: "Protonmail",
    img: "/img/Social/pt.svg",
    url: "mailto: kale.borroka.records@protonmail.com",
  },
  {
    name: "Youtube",
    img: "/img/Social/yt.svg",
    url:
      "https://www.youtube.com/playlist?list=PLpM-GGKpwdHrT6RpoqsHT2HVGoPet2sB-",
  },
];

interface SocialsProps {
  name: string;
  img: string;
  url: string;
}

const NavigationBar = (): JSX.Element => {
  const removeLastHr = document.getElementsByTagName("hr");

  return (
    <>
      <NavBar>
        <NavBarTop>
          <IconNavTop>
            {networks.map(({ name, img, url }: SocialsProps) => {
              return (
                <>
                  <a href={url}>
                    <ImgNavTop src={img} alt={name} />
                  </a>
                  <HrNavTop />
                </>
              );
            })}
          </IconNavTop>
        </NavBarTop>
        <NavBarDown>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Home</NavLink>
        </NavBarDown>
      </NavBar>
    </>
  );
};

export default NavigationBar;
