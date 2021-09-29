import "./style.css";

import { Typography } from "@material-ui/core";
import {} from "../../styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="follow">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Follow US
          </Typography>
          <Typography color="text.secondary">Engage with us</Typography>
        </div>
        <div className="icon">
          <Link
            href="https://www.linkedin.com/in/yousef-labn/"
            underline="none"
          >
            <LinkedInIcon sx={{ margin: 1 }} />
          </Link>
          <LanguageIcon sx={{ margin: 1 }} />
        </div>
      </div>
    </>
  );
};

export default Footer;
