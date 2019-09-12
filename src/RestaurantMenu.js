import React, { Component } from "react";
import MainMenu from "./MainMenu";

export default class RestaurantMenu extends Component {
  render() {
    const { menu } = this.props;
    return <MainMenu menu={menu} />;
  }
}
