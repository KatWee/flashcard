import MyButtonGroup from './components/ButtonGroup.js';
import MyCard from './components/Card.js';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

function App() {
    const [cards, setCards] = useState([]);
    const [dbError, setDbError] = useState(false);

    // check database connection and show the cards
    useEffect(() => {
        fetch('http://localhost:8081/health')
            .then((res) => {
                if (res.ok) {
                    setDbError(false);
                    // fetch cards only if database is connected
                    return fetch('http://localhost:8081/cards');
                } else {
                    setDbError(true);
                    return null;
                }
            })
            .then((res) => res ? res.json() : null)
            .then((data) => {
                if (data) setCards(data);
            })
            .catch((err) => {
                setDbError(true);
                console.error(err);
            });
    }, []);

    // add new card to database
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

    // delete card from database
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

    // update card in database
    const updateCard = (id, cardData) => {
      fetch(`http://localhost:8081/cards/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cardData),
      })
        .then((res) => res.json())
        .then((data) => {
          setCards((prev) => prev.map((c) => (c.id === id ? { ...c, ...cardData } : c)));
        })
        .catch((err) => console.error(err));
    };
  
  // webpage
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Flash Card</h1>

      {dbError && (
        <div style={{
          color: '#c62828',
          textAlign: 'center',
        }}>
          Unable to connect to database.
        </div>
      )}

      <div>
        < MyButtonGroup onCreate={addCard} dbError={dbError}/>
        <Box sx={{ flexGrow: 1, mx:5 }}>
          <Grid container spacing={2}>
              {/* sort cards by id in descending order and display them */}
              {[...cards].sort((a, b) => b.id - a.id).map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MyCard id={card.id} question={card.question} answer={card.answer} onDelete={deleteCard} onEdit={updateCard} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>

    </div>
  );
}

export default App;
