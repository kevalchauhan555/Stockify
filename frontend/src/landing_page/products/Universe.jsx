import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Stockify Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{ height: 60 }} />
          <p className="text-small text-muted mt-3">
          Our asset management venture
that is creating <br /> simple and transparent index
funds <br />to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ height: 55 }} />
          <p className="text-small text-muted mt-3">
          Options trading platform that lets you
create strategies, analyze positions, and examine
data <br /> points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{ height: 60 }} />
          <p className="text-small text-muted mt-3">
          Investment research platform
that offers <br /> detailed insights on stocks,
sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ height: 60 }} />
          <p className="text-small text-muted mt-3">
          Systematic trading platform
that allows you to <br /> create and backtest
strategies without coding.          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ height: 60 }} />
          <p className="text-small text-muted mt-3">
          Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.          </p>
        </div>
        <div className="col-4 p-3 mt-5">
        <img src="media/images/dittoLogo.png" style={{height:60}}/>
        <p className="text-small text-muted mt-3">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
