import React from "react";
import CartItem from './cartItems';



const Cart=(props)=>{


        const products=props.products;
        const setProductState=props.setProductState;

        const IncreaseQuantity = (product) => {
            // const {products} = this.state;  //new state name should be same as previous state
            let index = products.indexOf(product);
            products[index].qty += 1;
            setProductState([...products]);
            // this.setState({
            //     products:products  //old to new state
            // })
          };

        // console.log(products);
        return(
            <div className="Cart-items"> 
                {products.map((product)=>
                            <CartItem product={product} 
                            key= {product.id}
                            OnClickIncreaseQuantity={IncreaseQuantity}
                            // OnClickIncreaseQuantity={props.increaseClicked}
                            // OnClickDecreaseQuantity={props.decreaseClicked}
                            // OnClickDeleteItem={props.deleteClicked}
                            />
                            )}
                
            </div>
        )
}

export default Cart;