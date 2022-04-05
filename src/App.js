import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Pages/Home'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout child={<Home />} />} />
          <Route path="/Resume" element={<Layout />} />
          <Route path="/Project" element={<Layout />} />
          <Route path="/About" element={<Layout />} />
          <Route path="/Contact" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
