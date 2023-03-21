import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";

import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonaryImages from "../components/Image-gallery/MasonaryImages";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero-content">
                <div className="hero-subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem
                  ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
                  ipsumlorem ipsumlor
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero-img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero-img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero-img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services-subtitle">What We serve</h5>
              <h5 className="services-title">We offer our best services</h5>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured-tour-title">Our featured tours</h2>{" "}
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience-content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                  sed do eiusmod tempor incididunt ut
                </p>
              </div>

              <div className="counter-wrapper d-flex align-items-center gap-5">
                <div className="counter-box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter-box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter-box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience-img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery-title">Visit our customer tour gallery</h2>
              <MasonaryImages />
            </Col>
            <Col lg="12"></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
