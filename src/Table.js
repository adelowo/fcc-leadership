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
                    <th onClick={() => this.reBuildBoard('recent')}>Recent points (Click to toggle)</th>
                    <th onClick={() => this.reBuildBoard('alltime')}>Alltime Points (Click to toggle)</th>
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

    reBuildBoard(relativeUrl) {
        this.props.callback(relativeUrl);
    }
});

export default Table;
