import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useHistory, Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#12111B",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="sticky">
        <Container>
          <Toolbar className="navbar">
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
              style={{ color: "#359F65", fontSize: "1.6em" }}
            >
              CryptoFinder
            </Typography>
            <Link
              style={{
                color: "#359F65",
                // fontWeight: "bold",
                fontSize: "1.3em",
                paddingRight: "1em",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                color: "#359F65",
                // fontWeight: "bold",
                fontSize: "1.3em",
                paddingRight: "1em",
              }}
              to="/news"
            >
              News
            </Link>
            <Link
              style={{
                color: "#359F65",
                // fontWeight: "bold",
                fontSize: "1.3em",
                paddingRight: "1em",
              }}
              to="/contact"
            >
              Contact
            </Link>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 85, height: 40 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {user ? (
              <UserSidebar style={{ backgroundColor: "red" }} />
            ) : (
              <AuthModal />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
