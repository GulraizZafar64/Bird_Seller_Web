import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import Slider from "react-slick";
import { CgShoppingCart } from "react-icons/cg";


const Product = ({ data, id }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const navigate = useNavigate();
    return (
    <div className="productCard">
    <Slider {...settings} className="slikProductSlider">
          <div className="imageContainerSlider">
            <img src="https://t4.ftcdn.net/jpg/05/65/04/69/360_F_565046961_cNxdxIlZKqxBUcsQsZo4C4lUGOLyW09s.jpg"/>
          </div>
          <div className="imageContainerSlider">
          <img src="https://i.pinimg.com/originals/33/33/e4/3333e45c2edf0adbd4d98eb3ae81e1b2.jpg"/>
          </div>
        </Slider>
        <h3>Birds Flying In Air</h3>
        <p className="descriptionofproduct">The Wold best bird fount in austalia is that bird this is in very cheap rate only one left</p>
      <div>
      <p><b>5000PKR</b></p>
        <CgShoppingCart />

      </div>
    </div>
    );
};

export default Product;
