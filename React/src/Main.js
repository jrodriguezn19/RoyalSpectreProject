import React from 'react';
import logo from './images/1.jpg';
import './App.css';
import { InputGroup,Form,Col, Image, ListGroup, Row, Card, Navbar,Toast, CardColumns, Button, Container } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#home">Discussion</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
      <Row>
        <Col xs={12} md={8}>
          <Container>
          <Card margin-bottom={100}>
            <Card.Img variant="top" src={ require('./images/3.jpg') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ require('./images/5.jpg') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ require('./images/6.jpg') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ require('./images/4.jpg') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ require('./images/2.gif') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ require('./images/1.jpg') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ require('./images/6.jpg') } />
            <Card.Body>
                <Card.Title>Gail Kenning</Card.Title>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                <Button className="right" block>View</Button>
            </Card.Body>
          </Card>
          </Container>
        </Col>
        <Col xs={6} md={4}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Search..."
              aria-describedby="inputGroupPrepend"
              required
            />
            </InputGroup>
          <h1></h1>
          <Card>
            <Card.Header>Most Popular</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Gail Kenning
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/6.jpg')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Mola James
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/3.jpg')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Gareth Collins
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/4.jpg')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Ashley William
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/2.gif')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Mike Grass
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <h1></h1>
           <Card>
            <Card.Header>Poster Rating</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Gail Kenning
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/6.jpg')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Mola James
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/3.jpg')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Gareth Collins
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/4.jpg')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Ashley William
                    </Col>
                  </Row>
                </ListGroup.Item>
                 <ListGroup.Item action href="#link1">
                   <Row>
                    <Col xs={6} md={2}>
                      <Image
                        alt=""
                        src={require('./images/2.gif')}
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      Mike Grass
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
