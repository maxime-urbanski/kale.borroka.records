import {
  Title,
  Button,
  NavBar,
  NavBarDown,
  NavBarTop,
  NavLink,
} from "../styles/styled";

const home = () => {
  return (
    <>
      <main>
        <NavBar>
          <NavBarTop />
          <NavBarDown>
            <NavLink href="/" target="_blanck">
              Test
            </NavLink>
          </NavBarDown>
        </NavBar>
        <Title>Kale Borroka Records</Title>
        <Button>Details</Button>
      </main>
    </>
  );
};

export default home;
