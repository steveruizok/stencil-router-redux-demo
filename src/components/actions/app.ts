import { TypeKeys } from "../actions/index";

export interface AppUpdateCountAction {
  type: TypeKeys.APP_UPDATE_COUNT;
  change: number;
}

export const appUpdateCount = (change: number) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.APP_UPDATE_COUNT,
    change: change
  });
};
