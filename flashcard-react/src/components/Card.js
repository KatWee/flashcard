import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import CheckIcon from '@mui/icons-material/Check';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function MyCard({ id, question = 'Question', answer = 'This is an answer', btn, onDelete }) {

  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = () => setShowAnswer((s) => !s);

  return (
    <Card sx={{ width: 320, maxWidth: '100%' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          <LiveHelpIcon />
        </Typography>
        <Typography variant="h5" component="div" sx={{ wordBreak: 'break-word' }}>
          {question}
        </Typography>
        <Typography variant="body2">
          <Button onClick={toggleAnswer}>
            {showAnswer ? <VisibilityOffSharpIcon /> : <VisibilitySharpIcon />}
            {showAnswer ? ' Hide Answer' : ' Show Answer'}
          </Button>
          {showAnswer && (
            <Typography component="p" variant="body2" sx={{ wordBreak: 'break-word' }}>
              <p>{answer}</p>
              <Button size="small" onClick={() => onDelete(id)}><CheckIcon sx={{color: '#rgb(5, 161, 75)'}} /></Button>
            </Typography>
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" onClick={() => onDelete(id)}><DeleteIcon sx={{color: '#d32f2f'}} /></Button>
      </CardActions>
    </Card>
  );
}