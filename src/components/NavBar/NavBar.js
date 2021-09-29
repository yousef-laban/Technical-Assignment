import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <div className="NavBAr">
      <img
        className="logo"
        src="https://www.elevatus.io/wp-content/uploads/2020/10/20200101_Logo_EL_02-1.png"
        alt="logo"
      />

      <Link to={"/"} className="link">
        Jobs
      </Link>
    </div>
  );
};

export default NavBar;
