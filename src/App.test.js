import React from "react";
//Testing utils
import { render, screen } from "@testing-library/react";
//Testing componets
import App from "./App";
import Title from "./components/Text/Title/Title";
import { Subtitle } from "./components/Text/Subtitle/Subtitle";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";
import { Weather } from "./components/Weather/Weather";
import { Date } from "./components/Date/Date";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { Switcher } from "./components/Switcher/Switcher";

describe("Layout components test", () => {
  it("TITLE component test", () => {
    render(<Title />);
    screen.debug();
  });

  it("SUBTITLE component test", () => {
    render(<Subtitle />);
    screen.debug();
  });

  it("WEATHER component test", () => {
    render(<Weather />);
    screen.debug();
  });

  it("DATE component test", () => {
    render(<Date />);
  });

  it("ANALOG CLOCK component test", () => {
    render(<AnalogClock />);
    screen.debug();
  });

  it("DIGITAL CLOCK component test", () => {
    render(<DigitalClock />);
    screen.debug();
  });

  it("SWITCHER component test", () => {
    render(<Switcher />);
    screen.debug();
  });

  it("APP component test", () => {
    render(<App />);
    screen.debug();
  });
});

describe("Text content test", () => {});
