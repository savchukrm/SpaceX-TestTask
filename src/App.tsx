import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

import Header from './components/molecules/Header/Header';
import MainPage from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ position: 'relative' }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/fav" element={<Favourites />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
