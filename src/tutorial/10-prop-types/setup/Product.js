import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  console.log(image, name, price);
  return (<article className="product">
    <img src={image.url} alt={name}/>
    <h4>{name}</h4>
    <p>${price || 3.99}</p>
  </article>)
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.object.isRequired,
  price:PropTypes.object.isRequired
};


Product.defaultProps ={
  name: 'default name', 
  price: 3.99, 
  image:{url: defaultImage}
}


export default Product;
