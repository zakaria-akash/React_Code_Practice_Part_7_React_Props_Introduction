import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="selected_image"></img>
      <p>{props.tell}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
