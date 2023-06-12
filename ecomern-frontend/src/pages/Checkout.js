import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/CheckoutForm";
// import { useIncreaseCartProductMutation, useDecreaseCartProductMutation, useRemoveFromCartMutation } from "../services/appApi";
// import "./CartPage.css";
import "./Checkout.css";
import Navigation from "../components/Navigation";
// import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import ContactUs from "../components/ContactUs";


const stripePromise = loadStripe("pk_test_51N5lmvDBrkoq40ZPf79HKKIdeGhP2d2jgYW2K6W4RyF2GpxmgwP19r6cXAEJ85AVhqPqoIllCzixzzPt75pwvKCx003YiYCpGH");


// function CartPage() {
//     const user = useSelector((state) => state.user);
//     const products = useSelector((state) => state.products);
//     const userCartObj = user.cart;
//     let cart = products.filter((product) => userCartObj[product._id] != null);
//     const [increaseCart] = useIncreaseCartProductMutation();
//     const [decreaseCart] = useDecreaseCartProductMutation();
//     const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

function Checkout () {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    // const [increaseCart] = useIncreaseCartProductMutation();
    // const [decreaseCart] = useDecreaseCartProductMutation();
    // const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

    // let cart = products.filter((product) => userCartObj[product._id] != null);
    return (
        <p>
            <Navigation/>
        <Container style={{ minHeight: "95vh" }} className="cart-container">
            <Row>
            <Col>
                    <h1 className="pt-2 h3">Checkout Form</h1>
                    {cart.length == 0 ? (
                        <Alert variant="info">Thank You For Your Order. We Welcome You Visit Again</Alert>
                    ) : (
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    )}
                    <div>
                <ContactUs/>
            </div>
                </Col> 
            </Row>
        </Container>
        </p>
        )
}
// }

export default Checkout;

