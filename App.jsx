import styles from "./App.module.css"
import { Navbar } from './components/Navbar/Navbar';

import { Don } from "./components/Don/Don";
import {About} from "./components/About/About";
import { Experience} from "./components/Experience/Experience";
import { Contact} from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";





function App() {
  
  return (
    <div className={styles.App}>
      <Navbar />
     
      <Don />
      <About />
      <Experience />
      <Projects />
      <Contact />
     
    
      
      
    </div>
  );
}

export default App;
