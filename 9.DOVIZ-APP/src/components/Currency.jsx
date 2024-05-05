import React from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'

function Currency() {


const[ammount,setAmount]=useState('0');
const[fromCurrency,setFromCurrency]=useState('USD');
const[toCurrency,setToCurrency]=useState('TRY');
const[result,setResult]=useState(0);

let BASE_URL='https://api.freecurrencyapi.com/v1/latest'
let API_KEY='fca_live_EjodWvPM1oF6ZjcXiHr313JPZMQgvjodCBAJ493L'



const exchange= async()=>{
const response = await  axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
const result=(response.data.data[toCurrency]*ammount).toFixed(2)
setResult(result)

}
  return (




    <div className='currency-div'>
        <div>

            <h3 style={{marginTop:'-20px',fontFamily:'arial'}}>DÖVİZ KURU UYGULAMASI</h3>

            </div>

        <div className='currency-atr'>

        <input type="number" className='amount' value={ammount} onChange={(e)=>setAmount(e.target.value)}/>
        <select  className='from-currency-option'  onChange={(e)=>setFromCurrency(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight  style={
            {fontSize:'25px',color:'black',marginRight:'10px',}
        } />

        <select  className='from-currency-option' onChange={(e)=>setToCurrency(e.target.value)} >
            <option>TL</option>
            <option>EUR</option>
            <option>USD</option>
        </select>
        <input value={result} type="number" className='result' onChange={(e)=>setResult(e.target.value)}/>

        </div>

        <div><button className='exchange' onClick={exchange}>Çevir</button></div>


        
    </div>


  )
}

export default Currency