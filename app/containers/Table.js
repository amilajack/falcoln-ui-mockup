// @flow
import React, { Component } from 'react';
import TableRow from '../components/TableRow';
import styles from './Table.css';

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInput: '',
      data: [],
    };

    this.submitCreator = this.submitCreator.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitCreator(e) {
    const entry = {
      input: this.state.currentInput,
      date: new Date(),
    };
    this.setState({ data: [entry, ...this.state.data] });
    this.setState({ currentInput: '' });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ currentInput: e.target.value });
    e.preventDefault();
    const date = new Date();
  }

  render() {
    const tableRows = this.state.data.map(({ input, date }) =>
      <TableRow input={input} time={`${date.getHours()}:${date.getMinutes()}.${date.getSeconds()}`}date={date.toDateString()} key={date.getTime()} />
    );
    console.log(tableRows);
    return (
      <div data-tid="container">
        <table>
          <thead>
            <tr>
              <th>Creator</th>
              <th>Time Created</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
        <form>
          <input type="text" value={this.state.currentInput} onChange={this.handleChange} />
          <button onClick={this.submitCreator}>Add Creator</button>
        </form>
      </div>
    );
  }
}
