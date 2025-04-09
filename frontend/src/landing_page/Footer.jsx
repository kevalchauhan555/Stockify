import React from "react";
import '../index.css'

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
          <img
            src="media/images/stockify.PNG"
            style={{ width: "80%" }}
            alt="Logo"
          />
            <p>
              &copy; 2010 - 2024, Not Stockify Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <h6>Company</h6>
            <a href="" className="footerlinks">About</a>
            <br />
            <a href="" className="footerlinks">Products</a>
            <br />
            <a href="" className="footerlinks">Pricing</a>
            <br />
            <a href="" className="footerlinks">Referral programme</a>
            <br />
            <a href="" className="footerlinks">Careers</a>
            <br />
            <a href="" className="footerlinks">Stockify.tech</a>
            <br />
            <a href="" className="footerlinks">Press & media</a>
            <br />
            <a href="" className="footerlinks">Stockify cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <h6>Support</h6>
            <a href="" className="footerlinks">Contact</a>
            <br />
            <a href="" className="footerlinks">Support portal</a>
            <br />
            <a href="" className="footerlinks">Z-Connect blog</a>
            <br />
            <a href="" className="footerlinks">List of charges</a>
            <br />
            <a href="" className="footerlinks">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <h6>Account</h6>
            <a href="" className="footerlinks">Open an account</a>
            <br />
            <a href="" className="footerlinks">Fund transfer</a>
            <br />
            <a href="" className="footerlinks">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
          Stockify Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Stockify Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Stockify Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Stockify Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@Stockify.com, for DP related to dp@Stockify.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Stockify and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;