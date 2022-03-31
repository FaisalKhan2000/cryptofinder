import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Alert from "./components/Alert";
import News from "./Pages/News";
import Contact from "./Pages/Contact";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#171623",
    color: "#fff",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
