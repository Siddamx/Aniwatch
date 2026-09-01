import React, { useState } from 'react';
import './App.css';

const initialAnimeList = [
  { id: 1, title: 'Naruto', genre: 'Action, Adventure', episodes: 220, image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', status: 'Plan to Watch' },
  { id: 2, title: 'Jujutsu Kaisen', genre: 'Action, Supernatural', episodes: 24, image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', status: 'Watching' },
  { id: 3, title: 'Attack on Titan', genre: 'Action, Drama', episodes: 89, image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg', status: 'Completed' },
];

function App() {
  const [animeList, setAnimeList] = useState(initialAnimeList);
  const [filter, setFilter] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    setAnimeList(animeList.map(anime => anime.id === id ? { ...anime, status: newStatus } : anime));
  };

  const filteredList = animeList.filter(anime => filter === 'All' || anime.status === filter);

  return (
    <div className="app-container">
      <header className="header">
        <h1>🌟 My Anime Watchlist</h1>
        <p>Keep track of your favorite anime series!</p>
      </header>
      <div className="filter-tabs">
        {['All', 'Watching', 'Plan to Watch', 'Completed'].map(tab => (
          <button key={tab} className={filter === tab ? 'active' : ''} onClick={() => setFilter(tab)}>{tab}</button>
        ))}
      </div>
      <div className="anime-grid">
        {filteredList.map(anime => (
          <div className="anime-card" key={anime.id}>
            <img src={anime.image} alt={anime.title} />
            <div className="anime-info">
              <h3>{anime.title}</h3>
              <p className="genre">{anime.genre}</p>
              <p>Episodes: {anime.episodes}</p>
              <div className="status-control">
                <label>Status: </label>
                <select value={anime.status} onChange={(e) => handleStatusChange(anime.id, e.target.value)}>
                  <option value="Plan to Watch">Plan to Watch</option>
                  <option value="Watching">Watching</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
