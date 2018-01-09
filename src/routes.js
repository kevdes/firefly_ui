/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './containers/Home/action';
import { fetchLayoutIfNeeded } from './containers/Layout/action';
import { fetchUserIfNeeded } from './containers/UserInfo/action';
import HomePage from './containers/Home';
import Login from './containers/Login';
import LayoutPage from './containers/Layout';
import UserInfoPage from './containers/UserInfo';
import NotFoundPage from './containers/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: LayoutPage, // Add your route here
    loadData: (dispatch: Dispatch) =>
      Promise.all([
        dispatch(fetchLayoutIfNeeded()) // Register your server-side call action(s) here
      ])
  },
  {
    path: '/test',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) =>
      Promise.all([
        dispatch(fetchUsersIfNeeded()) // Register your server-side call action(s) here
      ])
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/UserInfo/:id',
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) =>
      Promise.all([dispatch(fetchUserIfNeeded(params.id))])
  },
  {
    path: '*',
    component: NotFoundPage
  }
];
