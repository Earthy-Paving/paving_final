import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import Navigation from "../components/Navigation";
// import Carousel from "../components/carousel"

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const latestProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div>
            {/* <img src="https://res.cloudinary.com/dy1pydfmg/image/upload/v1683623491/Pavestone_z0vrip.jpg" className="home-banner" style={{width:"100%",height:"800px"}}     /> */}
            {/* < Carousel /> */}
            <div>
              <Navigation/>
            </div>
          <div className="top">
  <div className="hero">
    <h1>EARTHY PAVING</h1>
    <div className="hero-secondary"> We are Here To Make Your Deram paving best.</div>
    <button className="btn-orderNow"><b>Order Now</b></button>
  </div>  
  <div className="placeholder"><img src="https://res.cloudinary.com/dy1pydfmg/image/upload/v1683623491/Pavestone_z0vrip.jpg" ></img>< div />
  </div>
</div>


            {/* <div id ="banner">
                <div id = "banner-images">
                    <img src = "https://res.cloudinary.com/dy1pydfmg/image/upload/v1685290967/6_mntjmy.png"></img>
                    <img src = "https://res.cloudinary.com/dy1pydfmg/image/upload/v1685290966/5_enogov.png"></img>
                    <img src = "https://res.cloudinary.com/dy1pydfmg/image/upload/v1685290966/8_ggxebw.png"></img>
                    <img src = "https://res.cloudinary.com/dy1pydfmg/image/upload/v1685290966/7_no6cfp.png"></img>
                    
                </div>
            
            </div> */}
            
            
            <div className="featured-products-container container mt-4"><br />
                <h2 style={{"backgroundColor":"#fcf7f7"}}>Latest products</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap" style={{"backgroundColor":"#fbf7f7"}}>
                    {latestProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div><br /><br />
                    <Link to="/category/all" style={{ "textAlign": "right", "display": "block", "textDecoration": "none", "backgroundColor":"#fcf7f7" }}>
                        <button style={{"borderRadius":"15px", "marginRight":"577px", "background-color": "#152d51", "color":"white", "fontWeight":"bold", "fontSize":"1.6rem"}}>
                        See more {">>"}
                        </button>
                    </Link>
                </div>
            </div>
            {/* sale banner */}
            <div className="sale__banner--container mt-4">
                {/* <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" /> */}
            </div>
            <div className="recent-products-container container mt-4">
                <h2 style={{"backgroundColor":"#f5eaf3", "textDecoration":"underline"}}>Categories</h2>
                <Row >
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Home;
