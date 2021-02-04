import React from 'react';
import logo from './logo.svg';

function Card(props: any){
  return (
    <div className="border border-gray-600 mb-4">
      <img src={logo} alt="" />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  
  title: "Title"
}