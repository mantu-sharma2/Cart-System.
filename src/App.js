import React, { useState } from "react";
import Cart from "./Cart";
import "./index"

const App = ()=> {

  const [products, setProductState] = useState([
    {
      title: "Mobile Phone",
      price: 999,
      qty: 1,
      url: "https://i.gadgets360cdn.com/products/large/motorola-edge-30-pro-657x800-1645713862.jpg",
    },
    {
      title: "Laptop",
      price: 123,
      qty: 15,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQug_MKbt6azKPhh_JJNwWU1RtrYOMSFKp16doJGrsdJzi2IhFl0xhWLKdfinOr5puDAag&usqp=CAU",
    },
    {
      title: "TV",
      price: 9200,
      qty: 10,
      url: "https://m.media-amazon.com/images/I/714J5Up9PVL._SL1500_.jpg",
    },
  ]);
  function getCount(){
    let total=0;
    products.forEach(element => {
      total+=element.qty;
    });
    return total;
  }

  function getTotalPrice(){
    let price=0;
    products.forEach(element => {
      price+=element.qty*element.price;
    });
    return price;
  }

  return (
    <div className="App">
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">CartItems</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home</a></li>
              
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/"><span className="glyphicon glyphicon-shopping-cart"></span> Cart-Items: {products.length}</a></li>
              <li><a href="/"><span className="glyphicon glyphicon-th-list"></span> Items-Count: {getCount()}</a></li>
              <li><a href="/"><span className="glyphicon glyphicon-usd"></span> Total-Price: {getTotalPrice()}</a></li>
              <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div>
        <Cart
          products={products}
          setProductState={setProductState}
        />
      </div>
    </div>
  );
};

export default App;
