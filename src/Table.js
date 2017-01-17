import React from "react";
import TableRow from "./TableRow";
import "./Table.css";

const Table = React.createClass({

    render() {
        let leaders = this.props.leaders;
        let count = 0; //here to simulate the serial number for the table

        return (
            <table>
                <thead>
                <tr>
                    <th>S/N</th>
                    <th>Username</th>
                    <th>Recent points (Click to toggle)</th>
                    <th>Alltime Points (Click to toggle)</th>
                </tr>
                </thead>
                <tbody>
                {leaders.map((arr) => {
                    arr.index = count++;
                    arr.key = arr.username;
                    return ( <TableRow {...arr}/> )
                })}
                </tbody>
            </table>
        );
    },

    reBuildBoard(relativeUrl = 'alltime') {
        if ("function" === typeof this.props.callback) {
            return this.props.callback(relativeUrl);
        }

        alert("OOPS");
    }
});

export default Table;
