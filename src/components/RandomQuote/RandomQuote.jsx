import React from 'react'
import "./RandomQuote.css"
import { useState } from 'react';
import twitter from "../assets/twitter-x-logo.png"
import reload from "../assets/reaload.png"

const RandomQuote = () => {
    let quotes = [];
    async function loadQuoates(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    // https://api.api-ninjas.com/v1/quotes
    // http://type.fit/api/quotes
    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    const [quote, setQuote] = useState({
        text: "nigggger nigggger nigggger nigggger nigggger nigggger nigggger nigggger",
        author: "hitler"
    });
    loadQuoates();
  return (
    <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="">
            <div className="line"></div>
            <div className="bottom">
                <div className="author">{quote.author}</div>
                <div className="icons">
                    <img src={reload} alt="" onClick={()=>{random()}} width={30} height={30} />
                    <img src={twitter} alt="" width={30} height={30} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote