import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  let wrapper = shallow(<App />);

  it("renders the  header", () => {
    expect(wrapper.find("[data-dap]").exists()).toBeTruthy();
  });
  it("renders the header text", () => {
    expect(wrapper.text()).toBe("Welcome to the DAP TEAM!");
  });
  it("checks for the right lenght", () => {
    expect(wrapper).toHaveLength(1);
  });
});
