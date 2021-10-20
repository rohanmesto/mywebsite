import React, { Component } from 'react';
import { Card, CardGroup, Button, Carousel} from 'react-bootstrap';

/**this is the images import */
import Rohan1 from '../images/laptop3.jpg';
import Rohan2 from '../images/softer3.jpeg';
import Rohan3 from '../images/book.jpg'
import Rohan4 from '../images/laptop4.jpg'
import Html from '../images/myhtml2.jpg'
import Css from '../images/mycss2.jpg'
import Java from '../images/myjava4.jpg'
export default class Home extends Component {    
  render() {
    return (
      <div>
      
              {/**This is the first Home Carousel */}
                <Carousel fade>
            <Carousel.Item>
              <img src={Rohan1} alt="" className="qt"/>
              <Carousel.Caption>
                <h3>Nothing is impossible in this life!</h3>
              </Carousel.Caption>
            </Carousel.Item>


          {/**This is the second Home Carousel */}
            <Carousel.Item>
              <img className="qw" src={Rohan2}  alt=""/>
              <Carousel.Caption>
                <h3>Be yourself and don't care about people!</h3>
              </Carousel.Caption>
            </Carousel.Item>


          {/**This is the third Home Carousel */}
            <Carousel.Item>
              <img className="qe" src={Rohan3} alt=""/>
              <Carousel.Caption>
                <h3>Believe that God will change your life</h3>
              </Carousel.Caption>
            </Carousel.Item>


         {/**This is the fourth Home Carousel */}
            <Carousel.Item>
              <img className="qr" src={Rohan4} alt=""/>
              <Carousel.Caption>
                <h3>Work hard because nothing is easy!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        
          <h3>Welcome to my home</h3>
          
        
          {/**This the first Home Card - HTML*/} 
                    <CardGroup>
            <Card>
            <div className="img-wrapper">
                <Card.Img src={Html} alt="image" className="hover-zoom"/>
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
                <Card.Img variant="top" src={Css} alt="" className="hover-zoom1" />
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
                <Card.Img variant="top" src={Java} alt="" className="hover-zoom2"/>
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

