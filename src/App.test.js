import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Title from "./components/Title/Title";
import { Subtitle } from "./components/Subtitle/Subtitle";

test("Layout Title component test", () => {
  render(<Title />);
  screen.debug();
});

test("Layout Subtitle component test", () => {
  render(<Subtitle />);
  screen.debug();
});

test("Layout App component test", () => {
  render(<App />);
  screen.debug();
});
