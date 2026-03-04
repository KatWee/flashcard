import logo from './logo.svg';
import './App.css';
import MyButtonGroup from './components/ButtonGroup.js';
import MyCard from './components/Card.js';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <h1>Flash Card</h1>

      <div>
        < MyButtonGroup />
        <Box sx={{ flexGrow: 1, mx:5 }}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <MyCard />
            </Grid>
          </Grid>
        </Box>
        
      </div>
    </div>
  );
}

export default App;
