import React, { Component } from "react";
import "./App.css";

import { Spinner } from "react-bootstrap";
import List from "./component/List";
import View from "./component/Table";

export default class App extends Component {
  state = {
    list: [],
    table: [],
    loading: true,
    numberOfItems: 20
  };

  async getDat() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");

    const parsed = await data.json();
    const filtered = await parsed.filter(item => {
      return item.id <= this.state.numberOfItems;
    });

    this.setState(() => {
      return {
        list: filtered,
        loading: false
      };
    });
  }

  buttonClick = (data, click) => {
    if (click) {
      this.setState({ table: [...this.state.table, data] });
    } else {
      const updatedTable = this.state.table.filter(item => {
        return item.id !== data.id;
      });
      this.setState({ table: updatedTable });
    }
  };

  moreItems = () => {
    this.setState({ numberOfItems: this.state.numberOfItems + 20 });
    this.getDat();
  };

  componentDidMount() {
    this.getDat();
  }

  render() {
    console.log(this.state.loading);
    return (
      <>
        <View renderTable={this.state.table} />

        {this.state.loading ? (
          <div
            className="d-flex justify-content-center"
            style={{ zIndex: "9", marginTop: "49vh" }}
          >
            <Spinner
              style={{ height: "100px", width: "100px" }}
              size="lg"
              animation="border"
              variant="success"
            />
          </div>
        ) : (
          <List
            list={this.state.list}
            buttonClick={this.buttonClick}
            more={this.moreItems}
          />
        )}
      </>
    );
  }
}
