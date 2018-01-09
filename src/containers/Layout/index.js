/* @flow */

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

import * as action from './action';
import type { Layout as LayoutType, Dispatch, Reducer } from '../../types';
import Schedule from '../../components/Schedule';
import UserList from '../../components/UserList';
import styles from './styles.scss';

type Props = { layout: LayoutType, fetchLayoutIfNeeded: () => void };

// Export this for unit testing more easily
export class Layout extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchLayoutIfNeeded();
  }

  renderLayout = (): Element<'p' | typeof UserList> => {
    const { layout } = this.props;

    if (
      !layout.readyStatus ||
      layout.readyStatus === 'LAYOUT_INVALID' ||
      layout.readyStatus === 'LAYOUT_REQUESTING'
    ) {
      return <p>Loading...</p>;
    }

    if (layout.readyStatus === 'LAYOUT_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    return <Schedule list={layout.list} />;
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Helmet title="Resource Schedule" />
        {this.renderLayout()}
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ layout }: Reducer) => ({ layout }),
  (dispatch: Dispatch) => ({
    fetchLayoutIfNeeded: () => dispatch(action.fetchLayoutIfNeeded())
  })
);

export default connector(Layout);
