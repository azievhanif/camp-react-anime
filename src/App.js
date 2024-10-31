import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Jikan Moe</NavbarBrand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;