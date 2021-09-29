import "./style.css";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../../store/actions/jobActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    location: "",
    description: "",
  });

  const handelSearch = (event) => {
    event.preventDefault();
    dispatch(fetchJobs(params));
  };

  return (
    <div className="cont">
      <div className="cont1">
        <TextField
          className="input"
          id="outlined-basic"
          label="Location"
          variant="outlined"
          size="small"
          onChange={(event) => {
            setParams({ ...params, location: event.target.value });
          }}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          size="small"
          onChange={(event) => {
            setParams({ ...params, description: event.target.value });
          }}
        />
      </div>

      <Button
        className="searchButton"
        variant="contained"
        size="small"
        color="primary"
        onClick={handelSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
