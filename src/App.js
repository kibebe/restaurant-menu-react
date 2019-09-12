import React, { Component } from "react";
import RestaurantMenu from "./RestaurantMenu";
import { menu } from "./MenuItems";

class App extends Component {
  state = {
    menu: menu
  };
  render() {
    const menu = this.state.menu;
    return (
      <div className="container">
        <h1>Restaurant Menu</h1>
        <RestaurantMenu menu={menu} />
      </div>
    );
  }
}

export default App;
