import "./style.css";
import { Card, Typography, Divider } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FlexStyle } from "../../styles";
import { Link } from "react-router-dom";

const SideCard = ({ job }) => {
  const percentage = 66;

  return (
    <Link to={`/job/${job.jobId}`} className="link">
      <Card className="sideCard">
        <FlexStyle>
          <Typography
            className="t1"
            variant="h5"
            sx={{ fontWeight: "bold" }}
            color="primary"
          >
            {job.jobTitle}
          </Typography>
          <div className="progressbar">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: "25px",
                pathColor: `rgba(255, 145, 0, ${percentage / 100})`,
                textColor: "#ff9100",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
        </FlexStyle>
        <Typography
          style={{ margin: "5px" }}
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          {job.locationName}
        </Typography>

        <div>
          <Divider />
          <Typography
            style={{ margin: "5px" }}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            {job.employerName}
          </Typography>
        </div>
      </Card>
    </Link>
  );
};

export default SideCard;
