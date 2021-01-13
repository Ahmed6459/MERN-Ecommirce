import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({product}) => {
  return (
      <Card className="rounded p-3 my-3" >
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"/>
          </Link>
            <Card.Body> 
            <Link to={`/product/${product._id}`}>
            <Card.Title as="div"><strong>{product.name}</strong> </Card.Title>
            </Link>           
            <Card.Text as="div"> 
              <div className="RATE">
                {product.rating} from {product.numReviews} views
                <Rating rating={product.rating} totla={product.numReviews} ></Rating>
              </div>
            </Card.Text>
            <Card.Text>{product.price}$</Card.Text>
            </Card.Body>
      </Card>
  );
};

export default ProductCard;