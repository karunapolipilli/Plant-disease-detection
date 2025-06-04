import React, { useState } from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import { Home, About, Features , Detect} from './Main.js';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <div className="overlay"></div>
      <header className="App-header">
        <Navbar setActiveSection={setActiveSection} />
        <div className="content-wrap">
          {activeSection === 'home' && <Home />}
          {activeSection === 'about' && <About />}
          {activeSection === 'features' && <Features />}
          {activeSection === 'detect' && <Detect />}
        </div>
      </header>
    </div>
  );
}

export default App;
