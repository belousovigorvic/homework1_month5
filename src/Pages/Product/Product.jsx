import classes from "./Product.module.css";
import Container from "../../components/Container/Container";
import { useLocation } from "react-router-dom";
const Product = () => {
  const { state } = useLocation();
  return (
    <Container>
      <div className={classes.product}>
        <img className={classes.product__img} src={state.picture} alt="img" />
        <div className={classes.product__info}>
          <h3 style={{color:state.color}}>Name:</h3> <span className={classes.product__info_item}>{state.name}</span>
          <h3>Description: </h3> <span className={classes.product__info_item}>{state.description}</span>
          <h3>Price: </h3> <span className={classes.product__info_item}>{state.price}</span>
          <div className={classes.product__tags}>
            tags: 
            {state.tags.map((tag, id) => <span key={id} className={classes.product__tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
