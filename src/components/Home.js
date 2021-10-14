import React, { Component } from 'react';
import { Card, CardGroup, Button, Carousel} from 'react-bootstrap';

export default class Home extends Component {    
  render() {
    return (
      <div>
      
              {/**This is the first Home Carousel */}
                <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/laptop3.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

          {/**This is the second Home Carousel */}

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/laptop4.jpg"
                alt=""
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

          {/**This is the third Home Carousel */}

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/softer3.jpeg"
                alt=""
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

         {/**This is the fourth Home Carousel */}

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/book.jpg"
                alt=""
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


          <h3>Welcome to my home</h3>

          {/**This the first Home Card - HTML*/}
          
                    <CardGroup>
            <Card>
            <div className="img-wrapper">
                <Card.Img src="./imges/myhtml2.jpg" alt="image" className="hover-zoom"/>
                </div>
                
                <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images.
                </Card.Text><a href="https://teamtreehouse.com/tracks/learn-html-2" target="_blank" rel="noreferrer"><Button variant="outline-danger">Click here for more</Button></a>
                </Card.Body>
                <Card.Footer>
                
                </Card.Footer>
            </Card>

            {/**This is the second Home Card - CSS */}
           
            <Card>
            <div  className="img-wrapper1">
                <Card.Img variant="top" src="./imges/mycss2.jpg" alt="" className="hover-zoom1" />
                </div>
                <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                Cascading Style Sheets (CSS) styles HTML elements with greater control than just using HTML. CSS can style almost any HTML tag that creates a visible element on the page, including all the HTML tags used to create headings, paragraphs, links, images, lists,
                </Card.Text><a href="https://teamtreehouse.com/tracks/design-skills-for-web-developers" target="_blank" rel="noreferrer"><Button variant="outline-primary">Click here for more</Button></a>
                </Card.Body>
                <Card.Footer>
                
                </Card.Footer>
            </Card>
            <br />

           {/**This is the third Home Card - Java */}

            <Card>
            <div  className="img-wrapper2">
                <Card.Img variant="top" src="./imges/myjava4.jpg" alt="" className="hover-zoom2"/>
                </div>
                <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages.
                </Card.Text><a href="https://teamtreehouse.com/tracks/beginning-javascript" target="_blank" rel="noreferrer"><Button variant="outline-warning">Click here for more</Button></a>
                </Card.Body>
                <Card.Footer>
                
                </Card.Footer>
            </Card>
            </CardGroup>

            
      </div>
    )
  }
}

