import React from "react";

function TouristInfoCards() {
  return (
    <div className="d-flex justify-content-between container">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/25/12/38/glasgow-2173449_960_720.jpg"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasrow</h1>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2017/04/14/23/47/bridge-2231612_960_720.jpg"
            alt="Manchester"
            className="card-img-top"
          />
          <div className="card-body">
            <h1>Manchester</h1>
            <a href="http://visitmanchester.com" className="btn btn-primary">
              Go Manchester
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg"
            alt="London"
            className="card-img-top"
          />
          <div className="card-body">
            <h1>London</h1>
            <a href="http://visitlondon.com" className="btn btn-primary">
              Go London
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
