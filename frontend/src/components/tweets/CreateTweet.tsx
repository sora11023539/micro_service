import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

export const CreateTweet: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tweet = {
      title,
      body,
    };

    await axios.post('http://localhost:3002/tweets', tweet);

    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} label="Title" />
      <TextField
        value={body}
        onChange={(e) => setBody(e.target.value)}
        label="Body"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
