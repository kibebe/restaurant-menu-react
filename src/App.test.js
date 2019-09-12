import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainMenu from "./MainMenu";
import { shallow } from "enzyme";
import { menu } from "./MenuItems";
import RestaurantMenu from "./RestaurantMenu";
import Option from "./Option";
import Related from "./Related";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RestaurantMenu menu={menu} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders without crashing", () => {
  shallow(<MainMenu menu={menu} />);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Option item={menu[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  shallow(<Related related={menu[0].related} />);
});

it("renders header text - Restaurant Menu", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Restaurant Menu</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});
