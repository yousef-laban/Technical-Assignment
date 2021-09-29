import "./style.css";
import { useParams } from "react-router";
import { CircularProgress, Grid } from "@material-ui/core";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

//components
import SideList from "../SideList/SideList";
import { useEffect, useState } from "react";
import instance from "../../store/actions/instance";
import DetailsCard from "./DetailsCard";
import Footer from "../Footer/Footer";
import { FlexStyleVer } from "../../styles";

const JobDetails = () => {
  const jobID = useParams().jobID;
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await instance.get("/jobs/" + jobID, {
        auth: {
          username: "813877df-d2fc-4576-9715-c2956c99c42e",
          password: "",
        },
      });
      setJob(res.data);
      setLoading(false);
    };
    fetchJob();
  }, [jobID]);

  if (loading) return <CircularProgress className="loading" />;

  return (
    <FlexStyleVer>
      <Grid container>
        <Grid xs={3}>
          <SimpleBar style={{ height: "1400px" }}>
            <SideList />
          </SimpleBar>
        </Grid>
        <Grid item xs={9}>
          <DetailsCard job={job} />
        </Grid>
      </Grid>
      <Footer />
    </FlexStyleVer>
  );
};

export default JobDetails;
