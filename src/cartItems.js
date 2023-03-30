import React from "react";
import "./index.css";

const CartItem = (props) => {
  const {title, price, qty, url}=props.product;
  return (
    // adding state
    
    <div className="cart-item">
      <div className="left-block">
        <img src={url} alt="" style={style.image}></img>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>Title: {title}</div>
        <div style={{ color: "#777" }}>Price: {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            onClick={() => props.OnClickIncreaseQuantity(props.product)}
          ></img>
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            onClick={() => props.OnClickDecreaseQuantity(props.product)}
          ></img>
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/3221/3221845.png"
            onClick={() => props.OnClickDeleteItem(props.product)}
          ></img>
        </div>
      </div>
    </div>
  );
};

const style = {
  image: {
    height: 120,
    width: 120,
    borderRadius: 4,
    border: '1px solid grey',
  },
};

export default CartItem;
