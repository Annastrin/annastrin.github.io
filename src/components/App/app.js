import { Header } from "../Header";
import { Hero } from "../Hero";
import { About } from "../About";
import { ProjectsList } from "../ProjectsList";
import { Contacts } from "../Contacts";
import { useStyles } from "./app-styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsList />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
