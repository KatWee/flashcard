import logo from './logo.svg';
import './App.css';
import MyButtonGroup from './components/ButtonGroup.js';
import MyCard from './components/Card.js';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
  const [cards, setCards] = useState([
    { id: 1, question: 'What is This subject?', answer: '32516 Internet Programming'},
  ]);

  const addCard = (card) => {
    const id = cards.length ? Math.max(...cards.map((c) => c.id)) + 1 : 1;
    setCards((prev) => [...prev, { id, ...card}]);
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
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
