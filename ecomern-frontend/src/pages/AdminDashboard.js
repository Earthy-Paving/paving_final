import React from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import ClientsAdminPage from "../components/ClientsAdminPage";
import DashboardProducts from "../components/DashboardProducts";
import OrdersAdminPage from "../components/OrdersAdminPage";
import Reviews from "../components/Reviews";
import "./AdminDashboard.css"


function AdminDashboard() {
    return (
        <Container className="dashboard">
            <Tab.Container defaultActiveKey="products">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="products" style={{cursor:"pointer"}}>Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="orders" style={{cursor:"pointer"}}>Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="clients" style={{cursor:"pointer"}}>Clients</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="reviews" style={{cursor:"pointer"}}>Reviews</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="products">
                                <DashboardProducts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="orders">
                                <OrdersAdminPage />
                            </Tab.Pane>
                            <Tab.Pane eventKey="clients">
                                <ClientsAdminPage />
                            </Tab.Pane>
                            <Tab.Pane eventKey="reviews">
  <Reviews />
</Tab.Pane>

                            
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default AdminDashboard;
