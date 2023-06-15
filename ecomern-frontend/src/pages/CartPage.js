// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Link } from "react-router-dom";
import {  Col, Container,  Table, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
// import CheckoutForm from "../components/CheckoutForm";
import { useIncreaseCartProductMutation, useDecreaseCartProductMutation, useRemoveFromCartMutation } from "../services/appApi";
import "./CartPage.css";
import Checkout from "./Checkout";
import Navigation from "../components/Navigation";


// const stripePromise = loadStripe("your_stripe_publishable_key");

function CartPage() {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [increaseCart] = useIncreaseCartProductMutation();
    const [decreaseCart] = useDecreaseCartProductMutation();
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

    function handleDecrease(product) {
        const quantity = user.cart.count;
        if (quantity <= 0) return alert("Can't proceed");
        decreaseCart(product);
    }

    return (
        <>
        
            <Navigation/>
        <Container style={{ minHeight: "50vh" }} className="cart-container">
             {cart.length === 0 ? (
                <div style={{paddingLeft:"450px"}}>
                <div class="book">
        <p style={{padding:"40px", fontSize:"20px", fontWeight:"bolder"}}>Shopping cart is empty. Add products to your cart</p>
        <div class="cover" style={{ fontSize:"20px", fontWeight:"bolder" }}>
            <p>Shopping Status</p>
        </div>
       </div>
       </div>    
            ) : (
                <>  
                    <Col md={12} className="col">
                        <>
                            <Table responsive="sm" className="cart-table">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity(feet)</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop through cart products */}
                                    {cart.map((item) => (
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>
                                                {!isLoading && <i className="fa fa-times" style={{ marginRight: 10, cursor: "pointer" }} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}></i>}
                                                <img src={item.pictures[0].url} style={{ width: 100, height: 100, objectFit: "cover" }} />
                                            </td>
                                            <td>Rs{item.price}</td>
                                            <td>
                                                <span className="quantity-indicator">
                                                    <i className="fa fa-minus-circle" onClick={() => handleDecrease({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                    <span>{user.cart[item._id]}</span>
                                                    <i className="fa fa-plus-circle" onClick={() => increaseCart({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                </span>
                                            </td>
                                            <td>Rs{item.price * user.cart[item._id]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div>
                                <h3 className="h4 pt-4">Total: Rs{user.cart.total}</h3>
                            </div>
                        </>
                        <Button className="btn" style={{"backgroundColor":'white'}} onClick={Checkout}><Link to="/checkout" className="link">Proceed to Checkout</Link></Button>
                    </Col>
                    </>
                )}
            {/* </Row> */}
        </Container>
        </>
        
    );
}

export default CartPage;
