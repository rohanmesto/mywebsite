import React, { Component } from 'react' 
import { Card, Carousel,Container,Row,Col,Button } from 'react-bootstrap'
export default class About extends Component {
    render() {
        return (
            <div>
            
                      <Carousel fade>
                      <Carousel.Item>
                        <img
                          className="leban"
                          src="./imges/lebanon.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="erbil"
                          src="./imges/erbil.png"
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="sirya"
                          src="./imges/allpo.jpg"
                          alt="Third slide"
                        />
                        

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                    <br />
                    <hr/>
                    <h3>Everything you want to know about me!</h3>
                    <hr/>
                    <br/>

                  



                    <Container>
              <Row>
                <Col xs><Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-dark"><Card.Header>My Favourite</Card.Header></Button> 
                        <Card.Body><div className="img-wrapper3"><Card.Img src="./imges/me.jpg" alt="" className="hover-zoom3"/></div>
                        <Card.Title>My Favourite</Card.Title>
                          <Card.Text>
                            I'm Rohan Mesto and I love the life & Riding Bike & Walking long distances & Swimming & martial arts.
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                <Col xs={{ order: 12 }}><Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-info"><Card.Header>Developer</Card.Header></Button>  
                        <Card.Body><div className="img-wrapper4"><Card.Img src="./imges/laptop4.jpg" alt="" className="hover-zoom4"/></div>
                          <Card.Title>Full Stack JavaScript</Card.Title>
                          <Card.Text>
                          I started Learning how building<br/> a Websites,By learning front end JavaScript & CSS & HTML & React and many more from computer langusges!.
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                <Col xs={{ order: 1 }}> <Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-secondary"><Card.Header>Guitar</Card.Header></Button> 
                        <Card.Body>

                        <div className="img-wrapper5"><Card.Img src="./imges/myadam1.jpg" alt="" className="hover-zoom5"/></div>

                          <Card.Title>Guitar Skills</Card.Title>
                          <Card.Text>
                            I started learning guitar in (2019) by myself!.And my dream is to be a worship team leader in the church!
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
              </Row>
            </Container>
            <br/>
            <hr/>
                    <br/>
                    
                    <Container>
              <Row>
                <Col xs><Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-success"><Card.Header>Kurdistan</Card.Header></Button> 
                        <Card.Body><div className="img-wrapper6"><Card.Img src="./imges/kurdi.jpg" alt="" className="hover-zoom6"/></div>
                          <Card.Title>Originally From!</Card.Title>
                          <Card.Text>
                          My originally is Kurdish but I didn't grow up there!, My grandfathers have moved to Syria. I speek the kurdish language
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Col>
                <Col xs={{ order: 12 }}><Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-danger"><Card.Header>Syria</Card.Header></Button> 
                        <Card.Body><div className="img-wrapper7"><Card.Img src="./imges/sirya.jpg" alt="" className="hover-zoom7"/></div>
                          <Card.Title>Where I Born!</Card.Title>
                          <Card.Text>
                            I born in syria 28th November 2002 and my parents moved from the war to Lebanon in 2013
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Col>
                <Col xs={{ order: 1 }}><Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-primary"><Card.Header>Lebanon</Card.Header></Button> 
                        <Card.Body><div className="img-wrapper8"><Card.Img src="./imges/liban.jpg" alt="" className="hover-zoom8"/></div>
                          <Card.Title>Where I Live!</Card.Title>
                          <Card.Text>
                            We came to Lebanon with my family so I grow up in Beirut, but my parents has left me and went to Syria in 2020
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
              </Row>
            </Container>
                    <br/>
                    <hr/>
                    <br/>
                    <Container>
              <Row>
                <Col xs> <Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-danger"><Card.Header>U.S.A</Card.Header></Button> 
                        <Card.Body><div className="img-wrapper9"><Card.Img src="./imges/usa.jpg" alt="" className="hover-zoom9"/></div>
                          <Card.Title>Language Skills!</Card.Title>
                          <Card.Text>
                            When I went to the church, there were a lot fo foreigners, and I started serving with them,and I used to talk to them.I learned English on my own,Without a school or treacher!
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                <Col xs={{ order: 12 }}><Card border="primary" style={{ width: '18rem' }}>
                        <Button variant="outline-warning"><Card.Header>Germany</Card.Header></Button> 
                        <Card.Body><div className="img-wrapper10"><Card.Img src="./imges/german.jpg" alt="" className="hover-zoom10"/></div>
                          <Card.Title>Language Skills!</Card.Title>
                          <Card.Text>
                            One day I start to learn the German language,that time I thought that I can go to Germany, but this didn't happened!. I stady for the A2 and I got the certification!
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>


                      
                <Col xs={{ order: 1 }}> <Card border="primary" style={{ width: '18rem' }}>
            <Button variant="outline-secondary"><Card.Header>Camera</Card.Header></Button> 
            <Card.Body><div className="img-wrapper11"><Card.Img src="./imges/mycamera.jpg" alt="" className="hover-zoom11"/></div>
              <Card.Title>Camera Skills!</Card.Title>
              <Card.Text>
                When I went to church,I start serving in the studio by taking pictures and videos and editig them!.
              </Card.Text>
            </Card.Body></Card></Col>
              </Row>
            </Container>
           <br/>
           <br/>
          
            </div>
        )
    }
}

