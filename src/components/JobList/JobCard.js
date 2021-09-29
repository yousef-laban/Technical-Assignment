import "./style.css";
import { Link } from "react-router-dom";

import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  Divider,
  withStyles,
} from "@material-ui/core";

const JobCard = ({ job }) => {
  const StyledButton = withStyles({
    root: {
      "&:hover": {
        backgroundColor: "#ff9100",
        color: "white",
      },
    },
  })(Button);

  return (
    <>
      <Card className="card">
        <CardContent>
          <Typography className="t2" variant="h5" sx={{ fontWeight: "bold" }}>
            {job.jobTitle}
          </Typography>
          <br />
          <Typography style={{ margin: "5px" }} color="text.secondary">
            {job.locationName}
          </Typography>
          <Divider />
          <Typography style={{ margin: "5px" }} color="text.secondary">
            {job.employerName}
          </Typography>
          <Divider />
          <Typography style={{ margin: "5px" }} color="text.secondary">
            {job.date}
          </Typography>
        </CardContent>
        <CardActions className="viewButton">
          <Link to={`/job/${job.jobId}`} className="link">
            <StyledButton
              className="b1"
              size="small"
              variant="outlined"
              color="primary"
            >
              View
            </StyledButton>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default JobCard;
