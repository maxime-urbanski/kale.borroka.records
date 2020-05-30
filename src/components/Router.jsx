import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import ban from "./img/ban.png";
import Home from "./home";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />
            <img className="mt-5" src={ban} alt="baniere" />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lp" component={""} />
                <Route path="/ep" component={""} />
                <Route path="/production" component={""} />
                <Route path="/divers" component={""} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
