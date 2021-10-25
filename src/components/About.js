import React, { Component } from 'react';
import { Card, Carousel, Container, Row, Col, Button } from 'react-bootstrap'

/** This is the images import */
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
                <h3>RUN YOUR OWN RACE!</h3>
              </Carousel.Caption>
            </Carousel.Item>

             {/** This is the second About carousel*/}

            <Carousel.Item>
              <img className="qu" src={Rohan5} alt=""/>
              <Carousel.Caption>
                <h3>DON'T GIVE UP!</h3>
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
          <br/>


            {/**this card talk about me as a developer */}
              <Col xs><Card style={{ width: '18rem' }} className="img-wrapper4">
              <Button variant="outline-dark"><Card.Title>Develober</Card.Title></Button>
            <Card.Img variant="top" src={Rohan10} className="hover-zoom4"/>
            <Card.Body>
              <Card.Text>
              I started learning coding in 2021 by <a href="https://www.horizonsinternational.org/" target="_blank" rel="noreferrer">MEC.MiddleEast</a> I studied Full Stack JavaScript by <a href="https://teamtreehouse.com/home" target="_blank" rel="noreferrer">Teamtreehouse</a> and I learned Databases using SQL, Web Design, and many more about Development skills.
              </Card.Text>
            </Card.Body>
          </Card></Col>
          <br/>


                {/**This is card talk about my facourite things! */}
              <Col xs={{ order: 'first' }}><Card style={{ width: '18rem' }} className="img-wrapper5">
              <Button variant="outline-secondary"><Card.Title>Rohan Mesto</Card.Title></Button>
            <Card.Img variant="top" src={Rohan9} className="hover-zoom5"/>
            <Card.Body>
              <Card.Text>
               I born in 28/11/2002 I have tremendous energy to do many things in this life!. I like to try and learn many things!. I love to do sport and workout  
              </Card.Text>
            </Card.Body>
          </Card></Col>
            </Row>
          </Container>

          <br/>
          <hr/>
          <br/>

                               {/**this card talk about lebanon */}           
                  <Container>
          <Row>
            <Col xs={{ order: 'last' }}><Card style={{ width: '18rem' }} className="img-wrapper6">
            <Button variant="outline-primary"><Card.Title>Lebanon</Card.Title></Button>
          <Card.Img variant="top" src={Rohan11} className="hover-zoom6"/>
          <Card.Body>
            <Card.Text>
            I came to <a href="https://www.google.com/maps/place/Lebanon/@33.8707613,34.7260061,8z/data=!3m1!4b1!4m5!3m4!1s0x151f17028422aaad:0xcc7d34096c00f970!8m2!3d33.854721!4d35.862285" target="_blank" rel="noreferrer">Lebanon</a> with my parents from 2013 until the present then I grew up here till 2020...
My parents left me while I'm growing till 2020
            </Card.Text>
          </Card.Body>
        </Card></Col>
        <br/>

            {/**this card talk about syria */}
            <Col xs>
            <Card style={{ width: '18rem' }} className="img-wrapper7">
            <Button variant="outline-danger"><Card.Title>Syria</Card.Title></Button>
          <Card.Img variant="top" src={Rohan13} className="hover-zoom7"/>
          <Card.Body>       
            <Card.Text>
            I also have a <a href="https://www.google.com/maps/place/Syria/@34.7988246,36.7581329,7z/data=!3m1!4b1!4m5!3m4!1s0x1518e6dc413cc6a7:0x877546f4882af620!8m2!3d34.802075!4d38.996815" target="_blank" rel="noreferrer">Syrian</a> identity because I was borned there! also my mother is Syrian!
            </Card.Text>
          </Card.Body>
        </Card></Col><br/>


            {/**this card talk about kurdistan  */}
            <Col xs={{ order: 'first' }}><Card style={{ width: '18rem' }} className="img-wrapper8">
            <Button variant="outline-success"><Card.Title>Kurdistan</Card.Title></Button>
          <Card.Img variant="top" src={Rohan12} className="hover-zoom8"/>
          <Card.Body>  
            <Card.Text>
            I'm originally Kurdish and I speak the language because my father is Kurdish. as<a href="https://www.bbc.com/news/world-middle-east-29702440" target="_blank" rel="noreferrer">Kurdish</a> we don't have land, but we have a State in Iraq called<a href="https://www.google.com/maps/place/Kurdistan+Region,+Iraq/@36.4103395,44.3871953,7z/data=!4m13!1m7!3m6!1s0x40090675168d57f5:0x18d1cbbe61767ce8!2sKurdistan+Region,+Iraq!3b1!8m2!3d36.4103395!4d44.3871953!3m4!1s0x40090675168d57f5:0x18d1cbbe61767ce8!8m2!3d36.4103395!4d44.3871953" target="_blank" rel="noreferrer"> Kurdistan</a>
            </Card.Text>
          </Card.Body>
        </Card></Col>
          </Row>
        </Container>

        <br/>
<hr/>
<br/>
                    {/**this card talk about media */}
                        <Container>
                  <Row>
                    <Col xs={{ order: 'last' }}><Card style={{ width: '18rem' }} className="img-wrapper9">
                    <Button variant="outline-secondary"><Card.Title>Media</Card.Title></Button>
          <Card.Img variant="top" src={Rohan15} className="hover-zoom9"/>
          <Card.Body>
            <Card.Text>
            I started in the photography service for six months in the <a href="https://www.facebook.com/ResurrectionChurchBeirut" target="_blank" rel="noreferrer">church!</a>
            </Card.Text>
          </Card.Body>
        </Card></Col><br/>


                    {/**this card talk about germany */}
                    <Col xs><Card style={{ width: '18rem' }} className="img-wrapper10">
                    <Button variant="outline-warning"><Card.Title>Germany</Card.Title></Button>
          <Card.Img variant="top" src={Rohan16} className="hover-zoom10"/>
          <Card.Body>         
            <Card.Text>
            I learned the German language because I had hoped to go to Germany but had no luck!
            </Card.Text>
          </Card.Body>
        </Card></Col><br/>


                    {/**this card talk about u s a */}
                    <Col xs={{ order: 'first' }}><Card style={{ width: '18rem' }} className="img-wrapper11">
                    <Button variant="outline-danger"><Card.Title>U.S.A</Card.Title></Button> 
          <Card.Img variant="top" src={Rohan17} className="hover-zoom11"/>
          <Card.Body>
           
            <Card.Text>
            I started learning English by myself!. when I started to go to the <a href="https://www.facebook.com/ResurrectionChurchBeirut" target="_blank" rel="noreferrer">church</a> in 2018 I found a lot of foreigners there so I started to have conversations with them so bet  by bet I got the English language 
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
