import React from 'react'
import '../css/weather.css'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { useState } from 'react';
function Weather() {

const sky =document.getElementById('sky');
const city_id=document.getElementById('city-id');
const img=document.getElementById('img');
const temp=document.getElementById('temp');
const wind=document.getElementById('wind');
const humidity=document.getElementById('humidity');
const [city,setCity]=useState();


const BASE_URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="75ae609c5f90c76b4411e6d5dfef92c4"
const weatherRsp= async()=>{
const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`);
let sky_response = response.data.weather[0].description
let cityid=response.data.name;
let image=response.data.weather[0].icon;
let temp_response=response.data.main.temp;
let wind_response=response.data.wind.speed;
let humidity_response=response.data.main.humidity;
sky.innerText=sky_response.toUpperCase();

city_id.innerText=cityid
img.innerHTML=image;
temp.innerText=`${temp_response.toFixed(0).toUpperCase()} °C`;
wind.innerText=`${wind_response} km/h`
humidity.innerText=humidity_response;
}





  return (
    <div className='weather-card'>
        <h1 className='title'>WEATHER APP</h1>
    <div className='weather-app'>

    <div className='header'>
        <input  type="text" className='input'onChange={(e)=>setCity(e.target.value)}/>
        <button className='search-button' onClick={weatherRsp}><FaSearch /></button>
        </div>



        <div className='info-card'>
            <div className='img'>
                <h1 id='city-id'>SAMSUN</h1>
                <h2 id='img'></h2>
            </div>
            <div>
                <div className='info-div'>
            <h2>HAVA:</h2>
            <h2>SICAKLIK:</h2>     
                </div>
                <div className='result'><h3 id='sky'></h3><h3 id='temp'></h3></div>
            <div className='info-div'>
            <h2>RÜZGAR HIZI:</h2>
            <h2>NEM:</h2>  
            </div>
            <div className='result'><h3 id='wind' ></h3><h3 id='humidity'>7</h3></div>
            </div>
        
        </div>


        </div>

    </div>
  )
}

export default Weather