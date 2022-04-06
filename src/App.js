import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import About from './Pages/About';
import Home from './Pages/Home'
import ProjectPage from './Pages/Project';
import Resume from './Pages/Resume';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout child={<Home />} />} />
          <Route path="/Resume" element={<Layout child={<Resume />} />} />
          <Route path="/Project" element={<Layout child={<ProjectPage />}/>} />
          <Route path="/About" element={<Layout child={<About />}/>} />
          <Route path="/Contact" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
