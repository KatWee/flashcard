import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function MyCard() {

  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = () => setShowAnswer((s) => !s);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          <PersonIcon />
          <AutoAwesomeIcon />
        </Typography>
        <Typography variant="h5" component="div">
          Question
        </Typography>
        <Typography variant="body2">
          <Button onClick={toggleAnswer}>
            {showAnswer ? <VisibilityOffSharpIcon /> : <VisibilitySharpIcon />}
            {showAnswer ? ' Hide Answer' : ' Show Answer'}
        </Button>
            {showAnswer && <p>This is an answer</p>}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small"><DeleteIcon sx={{color: '#d32f2f'}} /></Button>
      </CardActions>
    </Card>
  );
}