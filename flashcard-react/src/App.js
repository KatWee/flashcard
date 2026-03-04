import './App.css';
import MyButtonGroup from './components/ButtonGroup.js';
import MyCard from './components/Card.js';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8081/cards')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  const addCard = (card) => {
    fetch('http://localhost:8081/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        setCards((prev) => [...prev, data]);
      })
      .catch((err) => console.error(err));
  };

  const deleteCard = (id) => {
    fetch(`http://localhost:8081/cards/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setCards((prev) => prev.filter((c) => c.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1>Flash Card</h1>

      <div>
        < MyButtonGroup onCreate={addCard} />
        <Box sx={{ flexGrow: 1, mx:5 }}>
          <Grid container spacing={2}>
              {[...cards].sort((a, b) => b.id - a.id).map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MyCard id={card.id} question={card.question} answer={card.answer} onDelete={deleteCard} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
