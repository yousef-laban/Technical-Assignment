import { Switch, Route } from "react-router";

//style
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core";

//Components
import NavBar from "./components/NavBar/NavBar";
import JobList from "./components/JobList/JobList";
import JobDetails from "./components/JobDetails/JobDetails";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffa733",
      main: "#ff9100",
      dark: "#b26500",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Switch>
        <Route path="/job/:jobID">
          <JobDetails />
        </Route>
        <Route path="/">
          <JobList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
