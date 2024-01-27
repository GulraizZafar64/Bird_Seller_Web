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
         {data.images.map((image)=>(
          <div className="imageContainerSlider">
            <img src={image.url}/>
          </div>
         )) }
       
        </Slider>
        <h3>{data.name}</h3>
        <p className="descriptionofproduct">{data.description}</p>
      <div>
      <p><b>{data.price}PKR</b></p>
        <CgShoppingCart />

      </div>
    </div>
    );
};

export default Product;
