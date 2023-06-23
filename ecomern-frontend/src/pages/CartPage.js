import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Table, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRemoveFromCartMutation } from "../services/appApi";
import "./CartPage.css";
import Checkout from "./Checkout";
import Navigation from "../components/Navigation";

function CartPage() {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();
    const [quantityInput, setQuantityInput] = useState({});
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal();
    }, [quantityInput]);

    function handleQuantityChange(productId, event) {
        const newQuantity = parseInt(event.target.value);
        setQuantityInput((prevQuantityInput) => ({
            ...prevQuantityInput,
            [productId]: newQuantity,
        }));
    }

    function calculateTotal() {
        let newSubtotal = 0;
        for (const [productId, quantity] of Object.entries(quantityInput)) {
            const product = cart.find((item) => item._id === productId);
            if (product) {
                newSubtotal += product.price * quantity;
            }
        }
        setSubtotal(newSubtotal);
        setTotal(newSubtotal); // Assuming total is the same as subtotal in this case
    }

    return (
        <>
            <Navigation />
            <Container style={{ minHeight: "50vh" }} className="cart-container">
                {cart.length === 0 ? (
                    <div style={{ paddingLeft: "450px" }}>
                        <div className="book">
                            <p style={{ padding: "40px", fontSize: "20px", fontWeight: "bolder" }}>Shopping cart is empty. Add products to your cart</p>
                            <div className="cover" style={{ fontSize: "20px", fontWeight: "bolder" }}>
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
                                        {cart.map((item) => (
                                            <tr key={item._id}>
                                                <td>&nbsp;</td>
                                                <td>
                                                    {!isLoading && <i className="fa fa-times" style={{ marginRight: 10, cursor: "pointer" }} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}></i>}
                                                    <img src={item.pictures[0].url} style={{ width: 100, height: 100, objectFit: "cover" }} />
                                                </td>
                                                <td>Rs{item.price}</td>
                                                <td>
                                                    <input
                                                        className="inputCount"
                                                        type="number"
                                                        value={quantityInput[item._id] || ""}
                                                        onChange={(e) => handleQuantityChange(item._id, e)}
                                                    />
                                                </td>
                                                <td>Rs{item.price * (quantityInput[item._id] || 0)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <div>
                                    <h3 className="h4 pt-4">Total: Rs{total || 0}</h3>
                                </div>
                            </>
                            <Link to="/checkout" className="link">
                            <Button className="P2C" style={{"font-family":'Raleway'}}>Proceed to Checkout</Button> 

                            </Link>

                        </Col>
                    </>
                )}
            </Container>
        </>
    );
}

export default CartPage;
