import React from "react";
import { Table } from "react-bootstrap";
import { Col, Row, Card, Button, Spinner } from "react-bootstrap";

export default function View({ renderTable }) {
  return (
    <>
      <Row>
        <Col
          className="bg-dark "
          style={{
            height: "40vh",
            overflowY: "scroll",
            position: "fixed",
            zIndex: "5"
          }}
        >
          <Table striped bordered variant="dark" hover size="sm">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>ID</th>
                <th>Title</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {renderTable.map(y => {
                return (
                  <tr key={y.id}>
                    <td>
                      <Card.Img
                        variant="top"
                        src={y.thumbnailUrl}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </td>
                    <td>{y.id}</td>
                    <td>{y.title}</td>
                    <td>
                      <a href={y.url} target="_blank">
                        {y.url}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
