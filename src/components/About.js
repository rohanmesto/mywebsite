import React, { Component } from 'react';
import { Card, Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Rohan5 from '../images/softer2.jpeg'
import Rohan6 from '../images/softer1.jpeg'
import Rohan7 from '../images/lebanon.jpg'
import Rohan8 from '../images/p.jpeg'
import Rohan9 from '../images/me.jpg'
import Rohan10 from '../images/softer1.jpeg'
import Rohan11 from '../images/liban.jpg'
import Rohan12 from '../images/kurdi.jpg'
import Rohan13 from '../images/sirya.jpg'
import Rohan14 from '../images/myadam1.jpg'
import Rohan15 from '../images/mycamera.jpg'
import Rohan16 from '../images/german.jpg'
import Rohan17 from '../images/uussaa.jpg'



 

export default class About extends Component {
    render() {
        return (
            <div>

            {/** This is the first About carousel*/}

                    <Carousel fade>
            <Carousel.Item>
              <img className="qy" src= {Rohan6} alt="" />
              <Carousel.Caption>
                <h3>RUN YOUROWN RACE!</h3>
              </Carousel.Caption>
            </Carousel.Item>

             {/** This is the second About carousel*/}

            <Carousel.Item>
              <img className="qu" src={Rohan5} alt=""/>
              <Carousel.Caption>
                <h3>DON'T GIV UP!</h3>
              </Carousel.Caption>
            </Carousel.Item>

          {/** This is the third About carousel*/}

            <Carousel.Item>
              <img className="qi" src={Rohan7} alt=""/>
              <Carousel.Caption>
                <h3>FIGHT FOR YOUR DREAM!</h3>
              </Carousel.Caption>
            </Carousel.Item>

          {/** This is the fourth About carousel*/}

           
          <Carousel.Item>
              <img className="qo" src={Rohan8} alt=""/>
              <Carousel.Caption>
                <h3>ENJOY IN YOUR LIFE!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
<br/>
          <h3>Everything you want to know about me</h3>
          <br/>





               {/**This is the About Cards | this cards talk about me and about my skills!  */}



              {/**this is the first card talk about guitar skills */}
               <Container>
            <Row>
              <Col xs={{ order: 'last' }}><Card style={{ width: '18rem' }} className="img-wrapper3">
              <Button variant="outline-secondary"><Card.Title>Guitar</Card.Title></Button> 
            <Card.Img variant="top" src={Rohan14} className="hover-zoom3"/>
            <Card.Body>
              <Card.Text>
              I started to learn classical guitar in 2019 by myself. In 2020 I got an acoustic guitar and began to make progress. My dream is to be a worship leader.
              </Card.Text>
            </Card.Body>
          </Card></Col>


            {/**this card talk about me as a developer */}
              <Col xs><Card style={{ width: '18rem' }} className="img-wrapper4">
              <Button variant="outline-dark"><Card.Title>Develober</Card.Title></Button>
            <Card.Img variant="top" src={Rohan10} className="hover-zoom4"/>
            <Card.Body>
              <Card.Text>
               I start to learn coding in 2021 by Horizons. I stady Full Sack JavaScript by Teamtreehous and Databases using SQL and PHPmyadment! and web design and many more!
              </Card.Text>
            </Card.Body>
          </Card></Col>


                {/**This is card talk about my facourite things! */}
              <Col xs={{ order: 'first' }}><Card style={{ width: '18rem' }} className="img-wrapper5">
              <Button variant="outline-secondary"><Card.Title>About me</Card.Title></Button>
            <Card.Img variant="top" src={Rohan9} className="hover-zoom5"/>
            <Card.Body>
              <Card.Text>
               I have tremendous energy to do many things in this life!. I like to try and learn and taste many things!. I love to do sport and workout  
              </Card.Text>
            </Card.Body>
          </Card></Col>
            </Row>
          </Container>

          <br/>

                                          
                  <Container>
          <Row>
            <Col xs={{ order: 'last' }}><Card style={{ width: '18rem' }} className="img-wrapper6">
            <Button variant="outline-primary"><Card.Title>Lebanon</Card.Title></Button>
          <Card.Img variant="top" src={Rohan11} className="hover-zoom6"/>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>

            <Col xs>
            <Card style={{ width: '18rem' }} className="img-wrapper7">
            <Button variant="outline-danger"><Card.Title>Syria</Card.Title></Button>
          <Card.Img variant="top" src={Rohan13} className="hover-zoom7"/>
          <Card.Body>       
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>

            <Col xs={{ order: 'first' }}><Card style={{ width: '18rem' }} className="img-wrapper8">
            <Button variant="outline-success"><Card.Title>Kurdistan</Card.Title></Button>
          <Card.Img variant="top" src={Rohan12} className="hover-zoom8"/>
          <Card.Body>  
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>
          </Row>
        </Container>

        <br/>


                        <Container>
                  <Row>
                    <Col xs={{ order: 'last' }}><Card style={{ width: '18rem' }} className="img-wrapper9">
                    <Button variant="outline-secondary"><Card.Title>Media</Card.Title></Button>
          <Card.Img variant="top" src={Rohan15} className="hover-zoom9"/>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>

                    <Col xs><Card style={{ width: '18rem' }} className="img-wrapper10">
                    <Button variant="outline-warning"><Card.Title>Germany</Card.Title></Button>
          <Card.Img variant="top" src={Rohan16} className="hover-zoom10"/>
          <Card.Body>         
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>

                    <Col xs={{ order: 'first' }}><Card style={{ width: '18rem' }} className="img-wrapper11">
                    <Button variant="outline-danger"><Card.Title>U.S.A</Card.Title></Button> 
          <Card.Img variant="top" src={Rohan17} className="hover-zoom11"/>
          <Card.Body>
           
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>
                  </Row>
                </Container>
                <br/>
                    </div>
        )
    }
}
