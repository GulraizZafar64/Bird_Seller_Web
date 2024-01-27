import React, { useEffect, useContext, useState } from "react";
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
import { baseUrl } from "../../config";

const Home = () => {
    const [value, setValue] = React.useState([0,50000]);
    const [category,setCategory]=useState([])
    const [allCategory,setAllCategory]=useState([])
    const [subCategory,setSubCategory]=useState([])
    function valuetext(value) {
        return `${value}°PKR`;
      }
      const minDistance = 0;
   

      useEffect(() => {
        getBirds()
        getCategory()
    }, [])
    const [birds,setBirds]=useState([])
    const getBirds = () => {
        fetch(`${baseUrl}/getBirds`, {
            method: 'GET',
            // headers: {
            //     Authorization: `${authtoken}`,
            // },
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
                setBirds(data.products)
            }).catch(err => {
                console.log(err)
            })
    }
    const getCategory = () => {
      fetch(`${baseUrl}/categories`, {
          method: 'GET',
   
      }).then(res => res.json())
          .then((data) => {
            setAllCategory(data)
            let arr=[{label:"Select...",value:"select"}]
              data.map((item)=>{
         arr.push({label:item.name,value:item._id})
              })
              setCategory(arr)
          }).catch(err => {
              console.log(err)
          })
  }
  const onCategoryChange=(id)=>{
const filterData=  allCategory.find((item)=>item._id==id)
console.log(filterData)
let arr=[{label:"Select...",value:"select"}]
filterData.subcategories?.map((item)=>{
arr.push({label:item.name,value:item._id})
})
setSubCategory(arr)
}
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
        options={category}
        onChange={(e)=>onCategoryChange(e.value)}
      />
  </div>
  <div>
  <label>Select Sub Catagorie</label>
             <Select
        className="basic-single"
        classNamePrefix="select"
        options={subCategory}
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
                        products={birds}
                    />
        </div>
        </div>
    );
};

export default Home;
