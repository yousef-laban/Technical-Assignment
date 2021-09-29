import "./style.css";
import { useSelector } from "react-redux";
import SideCard from "./SideCard";
import { CircularProgress } from "@material-ui/core";

const SideList = () => {
  const { jobs, loading } = useSelector((state) => state.jobs);

  if (loading) return <CircularProgress className="loading" />;

  const jobList = jobs.results
    .slice(0, 10)
    .map((job) => <SideCard job={job} key={job.jobId} />);

  return <>{jobList}</>;
};

export default SideList;
