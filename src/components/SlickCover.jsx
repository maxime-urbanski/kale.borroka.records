import React from "react";

import "./menu.css";

import lp from "./Lp";
import epArticle from "./EP";

function SlickCover() {
    return (
        <div className="container-fluid">
            {lp.map((item) => {
                return (
                    <img
                        src={item.image}
                        alt={item.name}
                        key={item.id}
                        className="coverPicture"
                    />
                );
            }) || epArticle.map((item) => {
                return (
                    <img
                        src={item.image}
                        alt={item.name}
                        key={item.id}
                        className="coverPicture"
                    />
                );
            })}
        </div>
    );
}

export default SlickCover;
