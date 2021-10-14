import React, { Component } from 'react';
import { Card, Carousel, Container, Row, Col, Button } from 'react-bootstrap'



 

export default class About extends Component {
    render() {
        return (
            <div>

            {/** This is the first About carousel*/}

                    <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= "../images/lebanon.jpg"
                alt="Lebanese sea"
              />

              {/** This is the second About carousel*/}

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/softer2.jpeg"
                alt=""
              />

              {/** This is the third About carousel*/}

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/softer3.jpeg"
                alt=""
              />

              {/** This is the fourth About carousel*/}

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <img
                className="d-block w-100"
                src="./images/softer3.jpeg"
                alt=""
              />
          </Carousel>

          <h3>Everything you want to know about me</h3>
          <br/>





               {/**This is the first About Card  */}
                                    <Container>
                            <Row>
                              <Col xs> <Card border="primary" style={{ width: '18rem' }}>
                   <Button variant="outline-primary"><Card.Header>Header</Card.Header></Button>   
                      <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                    <hr/>

                    {/**This is the second About Card  */}
                    
                    </Col>
                              <Col xs={{ order: 12 }}><Card border="secondary" style={{ width: '18rem' }}>
                              <Button variant="outline-secondary"><Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Secondary Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                    <hr/>

                    {/**This is the third About Card  */}
                    
                    </Col>
                              <Col xs={{ order: 1 }}><Card border="success" style={{ width: '18rem' }}>
                      <Button variant="outline-success"> <Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Success Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                    <hr/>
                    
                    {/**This is the fourth About Card  */}
                    
                    </Col>
                            </Row>
                          </Container>
                          <Container>
                    <Row>
                      <Col xs> <Card border="danger" style={{ width: '18rem' }}>
                      <Button variant="outline-warning"><Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Danger Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                    <hr/>
                    
                  {/**This is the Fifth About Card  */}  
                    
                    </Col>
                      <Col xs={{ order: 12 }}><Card border="warning" style={{ width: '18rem' }}>
                      <Button variant="outline-danger"><Card.Header>Header</Card.Header></Button> 
                      <Card.Body>
                        <Card.Title>Warning Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                    <hr/>
                  </Col>

                  {/**This is the Sixth About Card  */}

                      <Col xs={{ order: 1 }}><Card border="info" style={{ width: '18rem' }}>
                      <Button variant="outline-info"><Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Info Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br /><hr/></Col>
                    </Row>
                  </Container>
                  
                {/**This is the Seventh About Card  */}

                  <Container>
                    <Row>
                      <Col xs> <Card border="dark" style={{ width: '18rem' }}>
                      <Button variant="outline-dark"><Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br /></Col>

                    {/**This is the Eighth About Card  */}

                      <Col xs={{ order: 12 }}> <Card border="success" style={{ width: '18rem' }}>
                      <Button variant="outline-primary"><Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Light Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br /></Col>

                    {/**This is the Ninth About Card  */}

                      <Col xs={{ order: 1 }}> <Card border="info" style={{ width: '18rem' }}>
                      <Button variant="outline-secondary"><Card.Header>Header</Card.Header></Button>
                      <Card.Body>
                        <Card.Title>Info Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br /></Col>
                    </Row>
                  </Container>
                  <br/>
                  


            </div>
        )
    }
}


       



               
      