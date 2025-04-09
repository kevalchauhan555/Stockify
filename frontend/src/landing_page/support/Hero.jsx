import React from "react";

function Hero() {
  return (
    <section className="container-fluid" style={{backgroundColor:'#3f85cc',color:'white'}} id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{color:'white'}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" style={{width:"100%",height:40,borderRadius:4,marginBottom:10,border:'none'}} />
          <br />
          <a href="" style={{color:'white',padding:5}}>Track account opening</a>
          <a href="" style={{color:'white',padding:5}}>Track segment activation</a>
          <a href="" style={{color:'white',padding:5}}>Intraday margins</a>
          <a href="" style={{color:'white'}}>Kite user manual</a>
        </div>
        <div className="col-6">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{color:'white'}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{color:'white'}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;