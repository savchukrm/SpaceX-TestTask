import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/molecules/Header/Header';
import MainPage from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fav" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
