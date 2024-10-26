"use client";
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export default function PostForm() {
  const [user, setUser] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, content }),
    });
    setUser('');
    setContent('');
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center' }}>
        Create a New Post
      </Typography>
      
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          bgcolor: 'background.paper',
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <TextField
          variant="outlined"
          label="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          fullWidth
          InputLabelProps={{ style: { color: '#ccc' } }}
          sx={{
            input: { color: 'whitesmoke' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#666' },
              '&:hover fieldset': { borderColor: '#999' },
            },
          }}
        />
        
        <TextField
          variant="outlined"
          label="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          multiline
          rows={4}
          fullWidth
          InputLabelProps={{ style: { color: '#ccc' } }}
          sx={{
            textarea: { color: 'whitesmoke' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#666' },
              '&:hover fieldset': { borderColor: '#999' },
            },
          }}
        />
        
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1e88e5',
            color: 'white',
            fontWeight: 'bold',
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Post
        </Button>
      </Box>
    </Container>
  );
}
