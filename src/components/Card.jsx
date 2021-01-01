import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  width: "18rem;"
  
}

function Card(props){
  const {themeHandler, background : { theme, bgColor, textColor, btnColor, img}
  } = props;
    return (
   <div className={`card ${bgColor} ${textColor}`} style={style}>
  <img src={`${img}`} className="card-img-top w-100" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Asem</h5>
    <p className="card-text">Front End Developer.<br /><br />Marketer</p>
    <a href="#" class={`btn ${btnColor}`} onClick={themeHandler}>It's {theme}</a>
  </div>
</div>
    )
}

export default Card;