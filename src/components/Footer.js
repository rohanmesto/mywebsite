import React from 'react'

const Footer = () => {
    return(


     /** this is the Main Footer */
                <div className="main-footer">
                <div className="container">
                <div className="row">
                <div className="col">
                <h4>Rohan Mesto</h4>
                 {/**this is the Footer Contact */}
                <ul className="list-unstyled">
                    <li>+961 76-153-095</li>
                    <li>Beirut,Lebanon</li>
                    <li>Mar Charbel,Saint Rita Street,Bourj Hammoud</li>
                </ul>
                </div>
               
             
                </div>
                <hr />
                 <div className="row">
                     <p className="col-sm">
                      {/**this is the Date! */}
                        &copy;{new Date().getFullYear()} Rohan Mesto | All right reserved | Terms of Service
                     </p>
                 </div>
                </div>
                    
                </div>
    )
}
export default Footer;