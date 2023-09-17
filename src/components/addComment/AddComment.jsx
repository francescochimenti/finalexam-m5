import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

function AddComment() {


  return (
    <Box 
      component="div" 
      sx={{ 
        marginBottom: '20px', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: '20px' }}>
        <InputLabel>Voto</InputLabel>
        <Select>

        {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Commento"
        variant="outlined"
        multiline
        sx={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary">
        Aggiungi Commento
      </Button>
    </Box>
  );
}

export default AddComment;
