import React from 'react';

const Footer = () => (
  <footer className="">
    <div className="custom-container mb-5 pb-3 pt-4">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            ALLES
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://commercejs.com/docs/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Về chúng tôi
              </a>
              <a
                href="https://commercejs.com/features"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Trợ giúp
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://commercejs.com/docs/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Giao hàng và đổi trả
              </a>
              <a
                href="https://commercejs.com/features"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/commercejs"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/commerce.js/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="">
      <div className="bg-gray200">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className=" py-2 text-right">
            <p className="font-color-dark font-size-caption  text-center">
              &copy; { new Date().getFullYear() } ALLES - All Rights Reserved 
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
