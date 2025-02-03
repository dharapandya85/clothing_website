import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-section footer-contact">
    <h3>Get in Touch</h3>
    <p><strong>Neopremia UK</strong></p>
    <p>A division of Mark SG Enterprises Ltd
[Import, distribution & marketing services
for promotional and retail premium products]
The Studio. 7. Margery Hall
Reigate Hill
Reigate
Surrey
RH2 9RL</p>
    <p>Contact Us</p>
    <p>Tel:+44 (0)1737-233890</p>
    <p>Fax:+44(0) 173233600</p>
    <p>Email: <a href="mailto:info@neopremia.co.uk">info@neopremia.co.uk</a></p>
    
   
    
  </div>

  <div className="footer-section footer-subscribe">
    <h3>Subscribe to our newsletter</h3>
    <p>To receive the latest offers and discounts</p>
    <form action="#" method="POST">
      <input type="text" placeholder="My Name" required />
      <input type="email" placeholder="My Email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>

  <div className="footer-section footer-payment">
    <h3>Buy Online in Confidence</h3>
    <div className="payment-icons">
      <img src="/images/mastercard.jpg" alt="Mastercard" />
      <img src="/images/visa.jpg" alt="Visa" />
      <img src="/images/americanexpres.jpg" alt="American Express"></img>
      <img src="/images/paypal.jpg" alt="Paypal"></img>
    </div>
  </div>

  <div className="footer-section footer-social">
    <h3>Follow Us</h3>
    <div className="social-icons">
      <a href="#"><img src="/images/facebook.jpg" alt="Facebook" /></a>
      <a href="#"><img src="/images/x.jpg" alt="Twitter" /></a>
      <a href="#"><img src="/images/instagram.jpg" alt="Instagram" /></a>
      <a href="#"><img src="/images/linkedin.jpg" alt="LinkedIn" /></a>
    </div>
  </div>

  

      <div className="footer-container">
        <p>&copy; 2024 Neopremia. All Rights Reserved.</p>
        <p>
          Website links: 
          <a href="http://www.uvgear.co.uk/">www.uvgear.co.uk</a>, 
          <a href="http://www.promofoam.co.uk/">www.promofoam.co.uk</a>, 
          <a href="http://www.marksg.com/brandthefans">www.brandthefans.co.uk</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
