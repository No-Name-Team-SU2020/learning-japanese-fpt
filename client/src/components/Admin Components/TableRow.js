import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.quesID}
          </td>
          <td>
            {this.props.obj.quesContent}
          </td>
          <td>
            {this.props.obj.optionA}
          </td>
          <td>
            {this.props.obj.optionB}
          </td>
          <td>
            {this.props.obj.optionC}
          </td>
          <td>
            {this.props.obj.optionD}
          </td>
          <td>
            {this.props.obj.correctAns}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;