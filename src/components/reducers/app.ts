import { TypeKeys, ActionTypes } from "../actions/index";

interface AppState {
  count: number;
}

const getInitialState = () => {
  return {
    count: 0
  };
};

const app = (state: AppState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.APP_UPDATE_COUNT: {
      return { ...state, count: state.count + action.change };
    }
  }

  return state;
};

export default app;
