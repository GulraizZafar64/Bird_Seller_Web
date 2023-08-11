import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Select from 'react-select'
import { Slider } from "@mui/material";
import bird1 from '../../assets/littleBird1.gif'
import bird2 from '../../assets/littleBird2.gif'

const Home = () => {
    const [value, setValue] = React.useState([0,50000]);
    function valuetext(value) {
        return `${value}°PKR`;
      }
      const minDistance = 0;
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };
    const handleRangeChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
          setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
      };

    return (
        <div>
            <Banner />
         <div className="catagorieCardContainer">
         <div className="catagorieCard">
                <h1>Search Your Bird By Catagorie</h1>
                <div className="lineCon">
                <div className="line"></div>
                </div>

   <div className="selectsContainer">
  <div>
  <label>Select Catagorie</label>
   <Select
        className="basic-single"
        classNamePrefix="select"
        options={[{label:"Select...",value:"select"}]}
      />
  </div>
  <div>
  <label>Select Sub Catagorie</label>
             <Select
        className="basic-single"
        classNamePrefix="select"
        options={[{label:"Select...",value:"select"}]}
      />
  </div>
   
<div className="mainRangeWrapper">
<div className="rangeLabel">
        <p>Max Price</p>
        <p>50000PKR</p>
    </div>
<div className="rangepaker">
<Slider
 max={50000}
 min={0}
  getAriaLabel={() => 'Minimum Price'}
  value={value}
  onChange={handleRangeChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  disableSwap
/>
</div>
</div>
   </div>
               </div>
               <div>
     
               </div>
         </div>
            {/* <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
              
                </div>
            </div> */}
            <div className="main-content">
                  <Products
                        headingText="Popular Products"
                        products={products}
                    />
        </div>
        </div>
    );
};

export default Home;
