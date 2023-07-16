import React from "react";
import products from "../../products.json";
import Card from "../../components/Card/Card";
import classes from "./ProductsList.module.css";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
const ProductList = () => {
  return (
    <Container>
      <div className={classes.products}>
        <h1>Products List</h1>
        <div className={classes.productList}>
          {products.map((card) => (
            <Link key={card._id} to={`/product/${card._id}`} state={card}>
              <Card img={card.picture} name={card.name} price={card.price} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
