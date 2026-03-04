import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateIcon from '@mui/icons-material/Create';
import EditNoteIcon from '@mui/icons-material/EditNote';
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

export default function BasicModal( {onCreate, onEdit, cardId, initialQuestion = '', initialAnswer = '', isEdit = false, dbError} ) {
    const [open, setOpen] = React.useState(isEdit);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [question, setQuestion] = React.useState(isEdit ? initialQuestion : '');
    const [answer, setAnswer] = React.useState(isEdit ? initialAnswer : '');
    
    // get data to create or edit card
    const handleSubmit = () => {
        if (isEdit && onEdit) {
            onEdit(cardId, { question: question, answer: answer});
        } else if (!isEdit && onCreate) {
            onCreate({ question: question, answer: answer});
        }
        setQuestion(isEdit ? initialQuestion : '');
        setAnswer(isEdit ? initialAnswer : '');
        handleClose();
    };

    // Button and modal for creating and editing card
    return (
        <div>
            {/* only for create mode */}
            {!isEdit && (
                <Button onClick={handleOpen} disabled={dbError}>
                    <CreateIcon /> Create new card
                </Button>
            )}
            {/* modal with input fields */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {isEdit ? <EditNoteIcon /> : <CreateIcon />} 
                        {isEdit ? 'Edit Card' : 'Create new card'}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField label="Question" variant="outlined" value={question} onChange={(e) => setQuestion(e.target.value)} />
                        <TextField label="Answer" variant="outlined" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        <Button variant="contained" onClick={handleSubmit} disabled={!question.trim() || !answer.trim()}>{isEdit ? 'Update Card' : 'Create Card'}</Button>
                    </Typography>
                </Box>
                
            </Modal>
        </div>
  );
}