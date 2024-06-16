import React from 'react';
import './Footer.sass';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container pt-5">
        <div className="row justify-content-end">
          <div className="col-6 col-md-4 flex-column">
            <Link to="/" className="footer-logo">
              <img
                src="https://theme.hstatic.net/200000280801/1000673816/14/logo.png?v=17"
                alt="logo"
              />
            </Link>
            <h4>Chính sách bảo mật</h4>
            <p>Mã số thuế: 1289367128</p>
            <p>Hotline: 81923672</p>
            <p>Email: adasdasdhjuiasd</p>
            <p>Địa chỉ: iuagduiasd</p>
          </div>
          <div className="col-6 col-md-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1841427352306!2d106.68778391021198!3d10.797204358766534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce500cff0f%3A0xbbf71c8f52405d02!2zMjM4IFBoYW4gWMOtY2ggTG9uZywgUGjGsOG7nW5nIDcsIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1689440825875!5m2!1svi!2s"
              width={'100%'}
              style={{ aspectRatio: '1/1' }}
              height={'auto'}

              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-6 col-md-4">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/profile.php?id=100054925261389"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/profile.php?id=100054925261389"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/profile.php?id=100054925261389">
                  CKwhite - Tổng Kho Sỉ Lẻ Filler Botox
                </a>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="row w-100 p-3 justify-content-center">
          <h1 className="fs-4 m-0 text-center">
            Copy right &copy; 2023 CKWHITE BEAUTY
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
