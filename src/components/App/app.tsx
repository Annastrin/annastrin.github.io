import { Header } from "../Header";
import { Hero } from "../Hero";
import { About } from "../About";
import { ProjectsList } from "../ProjectsList";
import { Contacts } from "../Contacts";
import { Footer } from "../Footer";
import { useStyles } from "./app-styles";

const App = () => {
  useStyles();

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsList />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
