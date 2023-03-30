import React from "react";
import CartItem from "./cartItems";

const Cart = (props) => {
  const { products, setProductState } = props;
// console.log(products);
  const IncreaseQuantity = (product) => {
    let index = products.indexOf(product);
    products[index].qty += 1;
    setProductState([...products]);
  };
  const DecreaseQuantity=(product)=>{
    let index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    setProductState([...products]);
  }

  const DeleteProduct=(item)=>{
    let index=products.indexOf(item);
    if(index>-1){
      products.splice(index,1);   //2nd arg means remove only one element
    }
    setProductState([...products]);
  }

  return (
    <div className="Cart-items">
      {products.map((product,i) => (   //product index is used as key
        <CartItem
          product={product}
          key={i}
          OnClickIncreaseQuantity={IncreaseQuantity}
          OnClickDecreaseQuantity={DecreaseQuantity}
          OnClickDeleteItem={DeleteProduct}
        />
      ))}
    </div>
  );
};

export default Cart;
