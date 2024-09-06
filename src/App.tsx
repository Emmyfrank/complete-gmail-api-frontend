
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import LoginPage from "./Pages/LoginPage"
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginPage/>}/>
          <Route path="Search" element={<SearchPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
