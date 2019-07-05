import React from 'react';
import '../scss/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <p>Copyright &copy; 2019 filipszablowski.pl</p>
        <div className="icons">
          <span><a href="https://github.com/Szablos" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>
          <span><a href="https://www.linkedin.com/in/filip-szab%C5%82owski/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;