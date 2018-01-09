/* @flow */

import type { Dispatch, GetState, ThunkAction, Reducer } from '../../types';

export const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
export const fetchLayout = (
  axios: any,
  URL: string = API_URL
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'LAYOUT_REQUESTING' });

  try {
    const res = await axios.get(URL);

    dispatch({ type: 'LAYOUT_SUCCESS', data: res.data });
  } catch (err) {
    dispatch({ type: 'LAYOUT_FAILURE', err: err.message });
  }
};

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchLayout = (state: Reducer): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  if (state.home.readyStatus === 'LAYOUT_SUCCESS') return false; // Preventing double fetching data

  return true;
};

/* istanbul ignore next */
export const fetchLayoutIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  axios: any
) => {
  /* istanbul ignore next */
  if (shouldFetchLayout(getState())) {
    /* istanbul ignore next */
    return dispatch(fetchLayout(axios));
  }

  /* istanbul ignore next */
  return null;
};
