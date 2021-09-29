import "./style.css";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { WrapList } from "../../styles";
import { Pagination } from "@mui/material";
import { useState } from "react";
// Components
import SearchBar from "../SearchBar/SearchBar";
import { CircularProgress } from "@material-ui/core";

const JobList = () => {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);
  const jobsPerPage = 18;

  if (loading) return <CircularProgress className="loading" />;

  const jobList = jobs.results
    .slice((page - 1) * jobsPerPage, (page - 1) * jobsPerPage + jobsPerPage)
    .map((job) => <JobCard job={job} key={job.jobId} />);

  return (
    <>
      <SearchBar loading={loading} />
      <h1 className="recent">Recent Openings</h1>
      {jobs.results.length === 0 && <h2>No Jobs Available</h2>}
      <WrapList>{jobList}</WrapList>
      <div className="paginetion">
        <Pagination
          count={Math.ceil(jobs.results.length / jobsPerPage)}
          color="warning"
          page={page}
          onChange={(e, newpage) => setPage(newpage)}
        />
      </div>
    </>
  );
};

export default JobList;
