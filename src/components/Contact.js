import React, { Component } from 'react'
import { AiFillFacebook,AiFillGithub,AiFillInstagram,AiOutlineMail,AiOutlinePhone } from 'react-icons/ai';
export default class Contact extends Component {
    render() {
        return (
    
<div>

            
               <h1>Contact</h1>
               <hr/>
               <p>You can call or whatsapp me at:</p>
               <hr/>
                <p>+961 7615 3095</p>
                <hr/>
                <p>Or you can email me at:</p>
                <hr/>
                <p>rohanmesto@gmail.com</p>
                <hr/>
                <p>Follow me on:</p>
                <hr/>   
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <AiFillFacebook size="2em" color="blue" /> 
            </a>
               
            <a href="https://github.com/" target="_blank" rel="noreferrer">
                <AiFillGithub size="2em" color="black"/>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> 
                <AiFillInstagram size="2em" color="purple"/>
                </a>

                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
                <AiOutlineMail size="2em"/>
              </a>

              <a href="tel:+961 76153095" target="_blank" rel="noreferrer">
                <AiOutlinePhone size="2em" color="black"/>
                </a>
               
    <hr/>
    <br/>
              
                    </div>
        ) 
    }
}

