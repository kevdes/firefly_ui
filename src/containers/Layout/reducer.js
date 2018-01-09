/* @flow */

import _ from 'lodash/fp';

import type { Home, Action } from '../../types';

type State = Home;

const initialState = {
  readyStatus: 'LAYOUT_INVALID',
  err: null,
  list: []
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'LAYOUT_REQUESTING':
      return _.assign(state, {
        readyStatus: 'LAYOUT_REQUESTING'
      });
    case 'LAYOUT_FAILURE':
      return _.assign(state, {
        readyStatus: 'LAYOUT_FAILURE',
        err: action.err
      });
    case 'LAYOUT_SUCCESS':
      return _.assign(state, {
        readyStatus: 'LAYOUT_SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
