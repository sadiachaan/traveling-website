import React, { useEffect } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import Booking from "../components/Booking/booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const TourDetails = () => {
  const { _id } = useParams();

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${_id}`);

  const { photo, title, desc, price, address, city, distance, maxGroupSize } =
    tour;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour-content">
                <img src={photo} alt="" />

                <div className="tour-info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {address}
                    </span>
                    <div>
                      <span className="d-flex align-items-center gap-1">
                        <i class="ri-star-fill"></i>
                        {city}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i class="ri-star-fill"></i>${price}/per person
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i class="ri-star-fill"></i>
                        {maxGroupSize}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
