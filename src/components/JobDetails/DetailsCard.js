import "./style.css";
import { Card, Typography, Chip } from "@material-ui/core";
import parse from "html-react-parser";
import Summary from "./Summary";

const DetailsCard = ({ job }) => {
  return (
    <Card className="detailsCard">
      <div className="detailsTitle">
        <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">
          {job.jobTitle}
        </Typography>
        {job.fullTime && (
          <Chip className="chip" label="Full Time" size="small" />
        )}
        {job.partTime && (
          <Chip className="chip" label="Part Time" size="small" />
        )}
      </div>
      <Typography color="text.secondary">
        Posted on : {new Date(job.datePosted.slice(1, -1)).toDateString()}
      </Typography>
      <br />
      <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">
        Description
      </Typography>
      <Typography color="text.secondary">
        {parse(job.jobDescription)}
      </Typography>
      <br />
      <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">
        Summary
      </Typography>
      <Summary job={job} />
      <br />
    </Card>
  );
};

export default DetailsCard;
