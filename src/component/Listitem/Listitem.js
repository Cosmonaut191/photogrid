import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";

export default class Listitem extends Component {
  state = {
    click: false
  };

  clicked = () => {
    this.setState({ click: !this.state.click }, () => {
      this.props.buttonClick(this.props.item, this.state.click);
    });
  };

  // clicked = () => {
  //   this.state.click = !this.state.click;
  //   this.props.buttonClick(this.props.item, this.state.click);
  // };

  render() {
    const { item } = this.props;

    return (
      <div>
        <Col xs={3}>
          <Card style={{ width: "15rem", boxShadow: "2px 2px 5px grey" }}>
            <Card.Img variant="top" src={item.url} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.url}</Card.Text>
              <Button
                variant={!this.state.click ? "primary" : "danger"}
                onClick={this.clicked}
              >
                {!this.state.click ? (
                  <span>Compare</span>
                ) : (
                  <span>Remove </span>
                )}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
