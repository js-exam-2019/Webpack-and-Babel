import React from "react";
import { render } from "react-dom";
import "./style.css";

const Greeting = () => <h1>Hello from JSX</h1>

render(
    <Greeting />,
    document.querySelector("#target")
)