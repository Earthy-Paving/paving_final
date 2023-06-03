import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null); // Added state for image file
  const [signup, { error, isLoading, isError }] = useSignupMutation();

  function handleSignup(e) {
    e.preventDefault();
    
    const formData = new FormData(); // Create a new FormData instance
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image); // Append the selected image file

    signup(formData); // Pass the formData to the signup mutation
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]); // Set the selected image file
  }

  return (
    <Container
      className="signup"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "4150px",
        background: "#dde4e3",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "4150px",
          background: "#dde4e3",
        }}
      >
        <Col md={6} className="signup__form--container">
          <fieldset>
            <Form style={{ width: "100%" }} onSubmit={handleSignup}>
              <h1>Create an account</h1>
              {isError && <Alert variant="danger">{error.data}</Alert>}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange} // Handle image file selection
                />
              </Form.Group><br />

              <Form.Group>
                <Button type="submit" disabled={isLoading}>
                  Create account
                </Button>
              </Form.Group>
              <p className="pt-3 text-center">
                Don't have an account? <Link to="/login">Login</Link>{" "}
              </p>
            </Form>
          </fieldset>
        </Col>
        {/* <Col md={6} className="signup__image--container"></Col> */}
      </Row>
    </Container>
  );
}

export default Signup;
