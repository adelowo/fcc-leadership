import React from "react";
import ReactDOM from "react-dom";
import TableRow from "./TableRow";

it("renders without crashing", () => {
    ReactDOM.render(<TableRow />, document.createElement("tbody"));
});
