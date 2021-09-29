import * as actionType from "./types";
import instance from "./instance";

export const fetchJobs = (parms) => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/search", {
        params: {
          keywords: parms.description,
          location: parms.location,
        },
        auth: {
          username: "813877df-d2fc-4576-9715-c2956c99c42e",
          password: "",
        },
      });
      dispatch({
        type: actionType.FETCH_JOBS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
