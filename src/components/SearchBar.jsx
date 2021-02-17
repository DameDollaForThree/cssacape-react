import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./components.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  onSearchSubmit(e) {
    console.log(this.state.text + "submitted to backend");
  }

  render() {
    return (
      <form className="search">
        <Input
          className="searchBar"
          onChange={this.onTextChange}
          placeholder="Search..."
        />
        <Button
          classes="searchButton"
          variant="contained"
          color="default"
          onClick={this.onSearchSubmit}
        >
          SUBMIT
        </Button>
      </form>
    );
  }
}

export default SearchBar;
