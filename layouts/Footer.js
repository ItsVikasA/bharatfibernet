// components/layout/Footer.jsx

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
    default:
      return <Footer1 />;
  }
};

export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg text-white">
      <div className="container">
        {/* -------- TOP 3-COLUMN LAYOUT -------- */}
        <div className="footer-widgets-wrapper py-5">
          <div className="row justify-content-center">
            {/* Company + Menu */}
            <div className="col-12 col-lg-4 mb-5 text-center">
  <img
    src="assets/img/logo/logo.png"
    alt="Bharat FiberNet"
    style={{
      height: "72px",
      marginBottom: "20px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  />

  <ul
    className="list-unstyled"
    style={{
      fontSize: "18px",
      lineHeight: "40px",
      textAlign: "center",
      margin: "0 auto",
      padding: 0,
    }}
  >
    <li>Who We Are</li>
    <li>What We Do</li>
    <li>Knowledge</li>
    <li>Career</li>
    <li>Help &amp; Support</li>
    <li>Contact</li>
  </ul>
</div>


            {/* Address Details */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="single-footer-widget d-flex flex-column align-items-center text-center"
                style={{ textAlign: "center" }}
              >
                <div className="widget-head">
                  <h4>Address Details</h4>
                </div>
                <p className="mb-0">
                  Jyothi Flora, 4th Floor, Kavuri Hills,
                  <br />
                  Phase 2, Madhapur, Hyderabad,
                  <br />
                  Telangana 500081
                </p>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="single-footer-widget d-flex flex-column align-items-center text-center"
                style={{ textAlign: "center" }}
              >
                <div className="widget-head">
                  <h4>Terms And Conditions</h4>
                </div>
                <ul
                  className="list-items list-unstyled mb-0"
                  style={{ textAlign: "center" }}
                >
                  <li className="mb-2">Privacy Policy</li>
                  <li className="mb-2">Terms Of Services</li>
                  <li className="mb-0">Refund Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* -------- HORIZONTAL DIVIDER -------- */}
        <hr className="my-0" />

        {/* -------- SINGLE CENTERED T&C LINE -------- */}
        <div className="py-3 text-center">
          <p className="mb-0">
            Terms &amp; Conditions reserved | Cookies | Privacy &amp; Security |
            © 2022 Bharat FiberNet | All rights reserved.
          </p>
        </div>

        {/* -------- BOTTOM SINGLE LINE -------- */}
        <div className="py-3 text-center">
          <p className="mb-0">
            Who We Are | What We Do | Knowledge | Career | Help &amp; support |
            Contact
          </p>
        </div>
      </div>
    </footer>
  );
};
