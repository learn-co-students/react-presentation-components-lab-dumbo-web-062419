// Code SimplerComponent Here
import React from 'react';




const SimplerComponent = (props) => {

  const handleClick = () => {
    console.log("clicked handleClick")
  }

  return(
    <div onClick={props.handleClick}>"I am just happy"</div>
  )
}


export default SimplerComponent;
