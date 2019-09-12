import React, { Component, Fragment } from "react";
import Related from "./Related";

export default class Option extends Component {
  state = {
    expanded: false
  };

  onChange = e => {
    let checkboxes = document.getElementsByName(e.target.name);
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        this.setState({
          expanded: true
        });
        return null;
      }
    }
    this.setState({
      expanded: false
    });
  };

  render() {
    const { choices, related } = this.props.item;
    const list = choices.map((item, index) => {
      return (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              name="menu2"
              onChange={this.onChange}
              value={item.name}
            />
            {item.name}
          </label>
        </li>
      );
    });
    if (related === undefined) return <ul>{list}</ul>;
    if (this.state.expanded) {
      return (
        <Fragment>
          <ul>{list}</ul>
          {related.length === 0 ? (
            ""
          ) : (
            <h6 className="related">You might also want</h6>
          )}
          <Related related={related} />
        </Fragment>
      );
    } else {
      return <ul>{list}</ul>;
    }
  }
}
