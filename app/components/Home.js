// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Table from '../containers/Table';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Table />
        </div>
      </div>
    );
  }
}
