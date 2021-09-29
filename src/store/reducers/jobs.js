import * as actionType from "../actions/types";

const initialState = {
  jobs: [],
  loading: true,
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default jobs;
