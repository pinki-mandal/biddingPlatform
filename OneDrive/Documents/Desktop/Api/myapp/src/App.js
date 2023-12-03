import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Beer from './components/Beer';
import './App.css'

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer Shop</h1>
      <input
        type="text"
        placeholder="Search beers..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;

