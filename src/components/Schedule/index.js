/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

type Props = { list: Array<Object> };

const headerHeight = { height: '90px' };

const UserList = ({ list }: Props): Element<'div'> => (
  <div id={styles.scheduleMain}>
    <div id={styles.leftColumn}>
      <div id={styles.spacerMain} style={headerHeight}>
        a
      </div>

      <div id={styles.personMain}>
        <ul>
          {list.map(user => (
            <li key={user.id}>
              <Link to={`/UserInfo/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div id={styles.rightColumn}>
      <div id={styles.dateMain} style={headerHeight}>
        c
      </div>

      <div id={styles.bookingMain}>d</div>
    </div>
  </div>
);

export default UserList;
