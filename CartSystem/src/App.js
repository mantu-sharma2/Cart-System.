import React, { useState } from "react";
import Cart from "./Cart";

const App = ()=> {
  // this.state
  const [products, setProductState] = useState([
    {
      title: "Mobile Phone",
      price: 999,
      qty: 1,
      url: "",
      id: 1,
    },
    {
      title: "Laptop",
      price: 123,
      qty: 15,
      url: "",
      id: 2,
    },
    {
      title: "TV",
      price: 9200,
      qty: 10,
      url: "",
      id: 3,
    },
  ]);
  // const products=

  // const IncreaseQuantity = (product) => {
  //   // const {products} = this.state;  //new state name should be same as previous state
  //   let index = products.indexOf(product);
  //   products[index].qty += 1;
  //   setProductState([...products]);
  //   // this.setState({
  //   //     products:products  //old to new state
  //   // })
  // };

  //     DecreaseQuantity=(product)=>{
  //         // const {products}=this.state;
  //         let index=products.indexOf(product);
  //         if(products[index].qty===0){
  //             return;
  //         }
  //         products[index].qty-=1;
  //         this.setState({
  //             products: products
  //         })
  //     }

  //     DeleteProduct=(item)=>{
  //         // const {products}=this.state;
  //         let index=this.products.indexOf(item);
  //         delete products[index];
  //         this.setState({
  //             products:products
  //         })
  //     }
  return (
    <div className="App">
      <Cart
        products={products}
        // increaseClicked={IncreaseQuantity}
        // decreaseClicked={this.DecreaseQuantity}
        // deleteClicked={this.DeleteProduct}
        setProductState={setProductState}
      />
    </div>
  );
};

export default App;
