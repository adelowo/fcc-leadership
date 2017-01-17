import React from "react";
import "./TableRow.css";

const TableRow = React.createClass({

    render() {
        let username = this.props.username;
        let recent = this.props.recent;
        let totalPoints = this.props.alltime;
        let count = this.props.index;
        let imageSrc = this.props.img;

        return (
            <tr>
                <td>{count}</td>
                <td><img src={imageSrc} alt={username}/>{username}</td>
                <td>{recent}</td>
                <td>{totalPoints}</td>
            </tr>
        );
    }
});

export default TableRow;
