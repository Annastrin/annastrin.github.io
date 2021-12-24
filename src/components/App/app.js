import { Header } from "../Header";
import { Hero } from "../Hero";
import { About } from "../About";
import { Projects } from "../Projects";
import { Contacts } from "../Contacts";
import useStyles from "./app-styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
