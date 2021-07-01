import React from 'react'
import NavigationBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Ban from './Ban'
import { ChildrenReact } from '../../Interface/Interface'

const Layout = ({ children }: ChildrenReact): JSX.Element => {
  return (
    <>
      <header>
        <NavigationBar />
        <Ban />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
