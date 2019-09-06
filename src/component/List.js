import React, { Component } from "react";
import { Col, Row, Card, Button, Spinner } from "react-bootstrap";
import Listitem from "./Listitem/Listitem";
export default class List extends Component {
  render() {
    const { list, more } = this.props;
    return (
      <div style={{ marginTop: "42vh" }} className="container ">
        <Row>
          {list.map(item => {
            return (
              <Listitem
                key={item.id}
                item={item}
                buttonClick={this.props.buttonClick}
              />
            );
          })}
        </Row>
        <Row className="justify-content-center my-5">
          <Col xs={2}>
            <Button variant="outline-success" onClick={more}>
              Load More
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
