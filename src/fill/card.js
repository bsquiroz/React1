import '../App.css';
import quotes from "./quotes"
import React, { useState } from "react"
import color from "./color"

const Card =() => {
  
  let auxQuote = quotes();
  let auxColor = color();
    
  const[quote, setquote]=useState("test quotes")
  const[author, setauthor]=useState("test author")
  const[newColor, setColor]=useState(auxColor)


  const abs = () => {
    setquote(auxQuote.quote)
    setauthor(auxQuote.author)

    setColor(auxColor)
  }

  return (
    <div className="container" style={{backgroundColor: newColor}}>
      <div className="Content">
      <div className="textContent" style={{color: newColor}}>
        <p>{quote}</p>
        <p className="author">{author}</p>
      </div>
      <div className="optionsContent">
        <a style={{color: newColor}} href="https://www.google.com/" target="blank"><i className="fab fa-facebook"></i></a>
        <button onClick={abs} style={{backgroundColor: newColor}}>change</button>
      </div>
    </div>
    </div>
  )
}

export default Card;