import React from "react";
import classes from "./Card.module.css";

const Card = ({ img, name, price }) => {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={img} alt="img" />
      <h2 className={classes.card__name}>{name}</h2>
      <h3 className={classes.card__price}>{price}</h3>
    </div>
  );
};

export default Card;
