import React, { Component } from "react";
import { Form, Button} from "react-bootstrap";
import Iframe from "react-iframe";
import Map from "./Map";
class Demo extends Component {
  state = {
    startDate: "null",
    endDate: "null",
  };

  startDateHandler = (event) => {
    this.setState({ startDate: event.target.value });
    // console.log(event.target.value);
  };
  endDateHandler = (event) => {
    this.setState({ endDate: event.target.value });
  };
  render() {
    return (
      <div>
        <Map />
        <Form>
          <Form.Group>
            <Form.Label>startDate</Form.Label>
            <Form.Control type="date" onChange={this.startDateHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>endDate</Form.Label>
            <Form.Control type="date" onChange={this.endDateHandler} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Iframe
          url={`https://api.thingspeak.com/channels/824825/charts/1?api_key=D2C6ZRLUY4RYOS2V&start=${this.state.startDate}%2005:00:00&end=${this.state.endDate}%2005:00:00&width=1600&step=true
          `}
          width="100%"
          height="250px"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}

export default Demo;
