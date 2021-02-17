import React, { Component } from "react";
import "./components.css";
import LinearLayout from "react-linear-layout";
import "react-linear-layout/react-linear-layout.css";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearLayout className="clickbox-container" direction="vertical">
        <LinearLayout direction="horizontal">
          <input type="checkbox" className="checkbox" />
          <a>Search by Professor</a>
        </LinearLayout>
        <LinearLayout direction="horizontal">
          <input type="checkbox" className="checkbox" />
          <a>Search by Class Name</a>
        </LinearLayout>
        <LinearLayout direction="horizontal">
          <input type="checkbox" className="checkbox" />
          <a>Search by Department</a>
        </LinearLayout>
      </LinearLayout>
    );
  }
}

export default CheckBox;
