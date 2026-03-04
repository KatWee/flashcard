import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateIcon from '@mui/icons-material/Create';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px',
};

export default function BasicModal( {onCreate} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');

    const handleSubmit = () => {
        if (onCreate) {
            onCreate({ question: question || 'Untitled question', answer: answer});
        }
        setQuestion('');
        setAnswer('');
        handleClose();
    };

  return (
    <div>
        <Button onClick={handleOpen}>
            <CreateIcon /> Create new card
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <CreateIcon /> Create new card
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Question" variant="outlined" value={question} onChange={(e) => setQuestion(e.target.value)} />
                    <TextField label="Answer" variant="outlined" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    <Button variant="contained" onClick={handleSubmit} disabled={!question.trim() || !answer.trim()}>Create Card</Button>
                </Typography>
            </Box>
            
        </Modal>
    </div>
  );
}