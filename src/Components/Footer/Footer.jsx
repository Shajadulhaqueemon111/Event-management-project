import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    
    <p><span className='text-xl font-bold'>About Education</span><br/><br/>EDUTECH Mistaken idea of denouncing <br />
    pleaser and prasing pain was born and I will <br />
    give you a complete account of the system. <br />
    and expound the actual teaching of the great explore</p>
  </aside> 
  <nav>
    <header className="footer-title text-font text-xl text-black">Services</header> 
    <a className="link link-hover">Development</a> 
    <a className="link link-hover">German Language</a> 
    <a className="link link-hover">Basic Time properly</a> 
    <a className="link link-hover">Cayber security</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl font-bold">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl font-bold">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;