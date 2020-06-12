import React, { Children } from 'react';
import MenuNav from './NavBar';
import Footer from './Footer';
import ban from "./img/ban.png";

function Layout ({Children}) {
    return (
        <>
        <div>
            <MenuNav />
        </div>
        <div className="mt-5 cOlor">
            <img src={ban} alt="baniere" />
        </div>
        <div>
            {Children}
        </div>
        <div>
            <Footer />
        </div></>
    );
}
export default Layout;