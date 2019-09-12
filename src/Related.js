import React, { Component } from "react";
import Option from "./Option";

export default class Related extends Component {
  state = {
    checked: []
  };
  onChange = e => {
    if (e.target.checked) {
      this.setState({
        checked: [...this.state.checked, e.target.value]
      });
    } else {
      let arr = [...this.state.checked];
      let index = arr.indexOf(e.target.value);
      if (index !== -1) {
        arr.splice(index, 1);
        this.setState({
          checked: arr
        });
      }
    }
  };
  render() {
    const { related } = this.props;
    const list = related.map((item, index) => {
      const { name } = item;
      return (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              name="menu2"
              onChange={this.onChange}
              value={name}
            />
            {name}
          </label>
          {this.state.checked.includes(name) ? <Option item={item} /> : null}
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}
