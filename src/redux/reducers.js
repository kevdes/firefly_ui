/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from '../containers/Home/reducer';
import layout from '../containers/Layout/reducer';
import userInfo from '../containers/UserInfo/reducer';

export default combineReducers({
  home,
  layout,
  userInfo,
  router
});
