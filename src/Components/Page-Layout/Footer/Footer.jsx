import "./Footer.css";
import Logo from "../../../Assets/Header/Logo.png";
import CallIcon from "../../../Assets/Home-Page/Call.png";
import WhatsappIcon from "../../../Assets/Home-Page/Whatsapp.png";

function Footer() {
    return (
      <div className="Footer">
          <div className="Footer-Contents">
              <div className="row g-0">
                  <div className="col-3 d-none d-md-block">
                      <div className="Footer-Logo">
                          <img src={Logo} alt="Our Logo" />
                      </div>
                  </div>

                  <div className="col-12 col-sm-7 col-md-6 pt-5 pt-sm-5 pb-sm-4 pb-md-0 pt-md-0 Footer-Align">
                      <div className="Footer-Content-Info mx-lg-4 px-5">
                          <h4 className="mt-lg-3 mb-2">+TECH ACADEMY</h4>
                          <p>At <span>+Tech Academy</span>, our goal is to help children, youth and everyone else fall in love with Coding & Digital Jobs. </p>
                      </div>
                  </div>

                  <div className="py-4 py-sm-0 pt-sm-3 pt-md-0 d-flex justify-content-center justify-content-sm-start col-12 col-sm-5 col-md-3 Footer-Align">
                      <div className="Footer-Content-Contact ps-sm-5 ps-md-3 ps-lg-5">
                          <h4 className="mt-lg-3">GET IN TOUCH</h4>

                          <div className="Footer-Contact">
                              <img src={CallIcon} alt="Phone number" />
                              <p>(+94) 074 283 3337</p>
                          </div>

                          <div className="Footer-Contact">
                              <img src={WhatsappIcon} alt="Whatsapp number" />
                              <p>(+94) 074 283 3337</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="Align-Bottom">
              <div className="Footer-Bottom py-1">
                  Managed By : Can Academy (Pvt) Ltd
              </div>
          </div>
          
      </div>
    );
}

export default Footer;