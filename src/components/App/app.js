import { Header } from "../Header";
import { Hero } from "../Hero";
import { About } from "../About";
import { Projects } from "../Projects";
import useStyles from "./app-styles";

function App() {
  const classes = useStyles();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <div className="contacts"></div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
