import axios from "../axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col, Badge, ButtonGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import SimilarProduct from "../components/SimilarProduct";
import "./ProductPage.css";
import { LinkContainer } from "react-router-bootstrap";
import { useAddToCartMutation } from "../services/appApi";
import ToastMessage from "../components/ToastMessage";
import Navigation from "../components/Navigation";

function ProductPage() {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [selectedOption, setSelectedOption] = useState("");
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState(null);
    const [addToCart, { isSuccess }] = useAddToCartMutation();

    const handleDragStart = (e) => e.preventDefault();
  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      setProduct(data.product);
      setSimilar(data.similar);
    });
  }, [id]);

    if (!product) {
        return <Loading />;
    }
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const images = product.pictures.map((picture) => <img className="product__carousel--image" src={picture.url} onDragStart={handleDragStart} key={picture.url}/>);

    let similarProducts = [];
  if (similar) {
    similarProducts = similar.map((product, idx) => (
      <div className="item" data-value={idx} key={product._id}> {/* Added key prop to fix the warning */}
        <SimilarProduct {...product} />
      </div>
    ));
  }

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    
        // Send HTTP POST request to save the selected option
        axios
          .post("/save-option", { selectedOption })
          .then((response) => {
            console.log(response.data.message);
          })
          .catch((error) => {
            console.error("Error occurred while saving the option:", error);
          });
      };


      return (
        <p>
          <Navigation/>
        <Container className="pt-5 " style={{ position: "relative" }}>
          <Row className="Row">
            <Col lg={6} className="pt-4" style={{marginTop:'58px'}}>
              <AliceCarousel
                mouseTracking
                items={images}
                controlsStrategy="alternate"
              />
            </Col>
            <Col lg={6} className="pt-4" style={{marginTop:"50px"}}>
              <h1>{product.name}</h1>
              <p>
                <Badge bg="primary">{product.category}</Badge>
              </p>
              <p className="product__price">Rs.{product.price}</p>
              <p style={{ textAlign: "justify" }} className="py-3">
                <strong>Description:</strong> {product.description} for One square
              </p>
              {user && !user.isAdmin && (
                <>
                  <ButtonGroup style={{ width: "90%" }}>
                    {/* <Form.Select
                      size="lg"
                      style={{ width: "40%", borderRadius: "0" }}
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <option value="1">What do you want ?</option>
                      <option value="2">I want grass only</option>
                      <option value="3">I want stone only</option>
                      <option value="4">I want workers</option>
                      <option value="5">5</option>
                    </Form.Select> */}
                    <Button
                      size="lg"
                      onClick={() =>
                        addToCart({
                          userId: user._id,
                          productId: id,
                          price: product.price,
                          image: product.pictures[0].url,
                        })
                      }
                    style={{backgroundColor:"#152B51"}}>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                  {/* <br />
                  <br /> */}
                  {/* <ReviewForm /> */}
                  {/* <ReviewList /> */}
                  {/* <br />
                  <br /> */}
                </>
              )}
    
              {user && user.isAdmin && (
                <LinkContainer to={`/product/${product._id}/edit`}>
                  <Button size="lg">Edit Product</Button>
                </LinkContainer>
              )}<br />
              {isSuccess && (
                <ToastMessage
                  bg="info"
                  title="Added to cart"
                  body={`${product.name} is in your cart`}
                />
              )}
            </Col>
          </Row>
          <div className="my-4">
            <h2>Similar Products</h2>
            <div className="d-flex justify-content-center align-items-center flex-wrap" style={{marginRight:"-200px"}}>
              <AliceCarousel
                mouseTracking
                items={similarProducts}
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </div>
          </div>
        </Container>
        </p>
      );
    }
    
    export default ProductPage;