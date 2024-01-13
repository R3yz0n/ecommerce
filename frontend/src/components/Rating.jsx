import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, text }) => {
  const stars = [];
  const roundedValue = Math.floor(value);
  const hasHalfStar = value - roundedValue !== 0;

  // Add full stars
  for (let i = 0; i < roundedValue; i++) {
    stars.push(<FaStar key={i} />);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  // Add empty stars to reach a total of 5 stars
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} />);
  }

  return (
    <Row className="align-items-center">
      <Col className="text-gold" sm={5}>
        {stars}
      </Col>

      <Col>{text} reviews</Col>
    </Row>
  );
};

export default Rating;
