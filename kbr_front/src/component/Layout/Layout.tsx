import NavigationBar from './NavBar'
import Ban from './Ban'

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <NavigationBar />
      <Ban />
      {children}
    </>
  )
}
export default Layout
