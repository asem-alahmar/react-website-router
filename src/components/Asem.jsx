import React from "react";

const Asem = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
              />
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              />
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              />
            </ol>
              <div className="row mt-5 mb-5">
          <div className="col-12 col-md-8 mb-5">
            <p className="position-relative top-50 start-50 translate-middle  fst-italic fs-5">
              {" "}
              Hi,
              <br />
              <br /> 
              <br />
              I'm Asem Alahmar, I like coding and making new businesses.
              <br />
              <br /> 
              <br />
              I am in love with Damascus & Istanbul.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <div class="card">
              <img
                src="https://avatars0.githubusercontent.com/u/73745574?s=460&u=b2c7342750d9f5c0e7714b50bbe05a5562c6d37b&v=4"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Asem Alahmar</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Front End Developer</li>
                <li class="list-group-item">Marketer</li>
              </ul>
              <div class="card-body">
                <a
                  href="https://github.com/asem-alahmar"
                  class="card-link"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asem;
