import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Modal from './Modal.js';


export default function MyButtonGroup({ onCreate, dbError }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Modal btn="create" onCreate={onCreate} dbError={dbError} />
      </ButtonGroup>
    </Box>
  );
}