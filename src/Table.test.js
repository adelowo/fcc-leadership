import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";

it("renders without crashing", () => {
    ReactDOM.render(<Table leaders={getDefaultProps()}/>, document.createElement('div'));
});

// Stubs
function getDefaultProps() {
    return [
        {
            "username": "Masd925",
            "img": "https://avatars.githubusercontent.com/u/9335367?v=3",
            "alltime": 2586,
            "recent": 174,
            "lastUpdate": "2016-11-13T12:11:10.748Z"
        },
        {
            "username": "Blauelf",
            "img": "https://avatars.githubusercontent.com/u/5952026?v=3",
            "alltime": 2507,
            "recent": 168,
            "lastUpdate": "2016-11-13T12:11:14.277Z"
        }
    ]
};
