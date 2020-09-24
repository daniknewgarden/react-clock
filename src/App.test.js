import React from "react";
//Testing utils
import { render, screen } from "@testing-library/react";
//Testing componets
import App from "./App";
import Title from "./components/Title/Title";
import { Subtitle } from "./components/Subtitle/Subtitle";

//Layout components tests
test("Layout TITLE component test", () => {
  render(<Title />);
  screen.debug();
});

test("Layout SUBTITLE component test", () => {
  render(<Subtitle />);
  screen.debug();
});

test("Layout APP component test", () => {
  render(<App />);
  screen.debug();
});
