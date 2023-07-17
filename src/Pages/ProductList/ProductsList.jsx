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
          {products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`} state={product}>
              <Card img={product.picture} name={product.name} price={product.price} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
