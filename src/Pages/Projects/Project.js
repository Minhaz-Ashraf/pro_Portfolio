import React from "react";
import "./Project.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h1 className="col-12 mt-3 mb-1 text-center">Recent Projects</h1>

       
        <p className="pb-3 text-center">
          Checkout my recent projects where I have done lots of creativity with
          new web Technologies
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded project-card mg">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="/images/smw.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Social Media Website</h6>
                </div>
                <a
                  className="ad-btn"
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/Minhaz-Ashraf/Social-media-website"
                >
                  View 
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded project-card mg">
              <div className="card-image">
                <span className="card-notify-badge">Full-Stack</span>
                <img src="/images/ecommerce-landingpage.png" alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">E- commerce web App</h6>
                </div>
                <a
                  className="ad-btn"
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/Minhaz-Ashraf/E-commerce"
                >
                  View 
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded project-card ">
              <div className="card-image">
                <span className="card-notify-badge">Wordpress</span>
                <img src="/images/e9m.avif" alt="project3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Elementor</span>
                <span className="card-detail-badge">WP-Forms</span>

                <span className="card-detail-badge">PHP</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Portfolio Website</h6>
                </div>
                <a
                  className="ad-btn"
                  target="_blank"
                  rel="noopener"
                  href="https://elite9marketing.co/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-project mt-3">
          <span className="text-container-project">
            
            <span className="text"><a
              className=" more-btn"
              target="_blank"
              rel="noopener"
              href="https://github.com/Minhaz-Ashraf?tab=repositories"
            >
              View more...
            </a></span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Projects;
