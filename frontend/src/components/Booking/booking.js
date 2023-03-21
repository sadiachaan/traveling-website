import React from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
const booking = ({ tour }) => {
  const { price } = tour;
  // const [credentials, setCredentials] = useState({
  //   userId: "01",
  //   userEmail: "example@gmail.com",
  //   fullName: "",
  //   phone: "",
  //   guestSize: "1",
  //   bookAt: "",
  // });

  const handleChange = (e) => {};
  return (
    <div className="booking">
      <div className="booking-top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
      </div>
      <div className="booking-form">
        <h5>Information</h5>
        <Form className="booking-info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date  "
              placeholder="Full Name"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number "
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default booking;
