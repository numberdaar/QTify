// import React from "react";
// import CardBox from "../Card/Card";
// import styled from "./section.module.css";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios';
// import {Grid } from "@mui/material";
//  export default function CardSection({title, type}){
//     const [carddata,setCarddata] = useState([]);
    
//     let url;

//     if(title ==="Top Albums"){
//         url="https://qtify-backend-labs.crio.do/albums/top";
//     }
//     const fetchalbum = async(url)=>{
//         try {
//           const respone = await axios.get(url);
//           const topalbumdata= respone.data;
//           setCarddata(topalbumdata);
//           console.log(topalbumdata);
//       }
//         catch(e){
//           console.log(e);
//         }
//       } 
//       useEffect(()=>{
//         fetchalbum(url);
//     },[url])
//     const carouselToggle = false;
//     return(
//         <>
//         <div className={styled.header}>
//             <div>
//                 <h3>{title}</h3>
//                 {title !=="songs" && (carouselToggle ? (
//                     <span onClick={()=> !carouselToggle}>show all</span>) : (
//                     <span onClick={()=> !carouselToggle}>collapse</span>))}
//             </div>
//             <div>
//                 {/* {carouselToggle ? (
//                     <p>ankit</p>
//                 ):( */}
//                     <Grid Container spacing={3}>
//                         {carddata.map((card) =>(
//                             <Grid item key={carddata.id } xs ={6} md={2}>
//                             <CardBox card = {card} />
//                             </Grid>
//                         ))}
//                         </Grid>
//                 {/* )} */}
//             </div>
//         </div>
//         </>
//     );
//  }
// Section.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardBox from '../Card/Card';
import { Grid } from '@mui/material';
import styled from "./section.module.css";

const Section = ({ title }) => {
  const [carddata, setCarddata] = useState([]);
  const [collapse,setCollapse] =useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setCarddata(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <div className={styled.head}>
            <h3>{title}</h3>
            {title !=="songs" && (collapse ? (
                        <h3 onClick={()=> setCollapse(!collapse)}>show all</h3>) : (
                        <h3 onClick={()=> setCollapse(!collapse)}>collapse</h3>))}
        </div>
      <Grid container spacing={3}>
        {carddata.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
            <CardBox card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;
