import React from "react";
import { Figure,Card} from "react-bootstrap";
const Member = (props) => (

<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={props.src} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.intro}
    </Card.Text>
  </Card.Body>
</Card>
);

export default Member;
