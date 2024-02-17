import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

export const CreateTweet: React.FC = () => {
  const [context, setContext] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tweet = {
      context,
    };

    await axios.post(`${import.meta.env.VITE_TWEET_API_URL}/tweets/`, tweet);

    setContext('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={context}
        onChange={(e) => setContext(e.target.value)}
        label="context"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
