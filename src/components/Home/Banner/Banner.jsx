import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
          <div className="contentmain">
            <h1>Find a friend</h1>
            <p>A Pet Shelter is a place shere stray, lost,
                <br/>
                abandoned or surrendered dogs and housed.
                <br/>
                Find your new best friend here!
            </p>
                <button>Get started</button>
          </div>
        </div>
    );
};

export default Banner;
