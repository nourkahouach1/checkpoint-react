import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Card,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com" />
                  <Form.Text className="text-muted">
                    we'll never share your email address , trust us !
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="secondary" type="submit">
              {" "}
              Log in{" "}
            </Button>
          </Form>

          <Card style={{ color: "#000", marginBottom: 15 }}>
            <Card.Img className="mb-3" src="https://picsum.photos/200/50" />
            <Card.Body>
              <Card.Title>
                <Card.Text>card example</Card.Text>
                <Card.Text>Welcome to my website!! Enjoy your tour!!</Card.Text>
              </Card.Title>
              <Button variant="primary">read more </Button>
            </Card.Body>
          </Card>

          <Alert variant="success">
            <Button variant="link">Subscribe To our Monthly NewsLetter</Button>
          </Alert>
        </Container>
      </header>
    </div>
  );
}

export default App;
