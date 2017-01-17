import React from "react";
import ReactDOM from "react-dom";
import LeadershipBoard from "./LeadershipBoard";

it("renders without crashing", () => {
    ReactDOM.render(<LeadershipBoard />, document.createElement('div'));
});
