import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { Tweet } from './Tweet';

interface TweetFormProps {
  onNewTweet: (tweet: Tweet) => void;
}

export const TweetForm: React.FC<TweetFormProps> = ({ onNewTweet }) => {
  const [context, setContext] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const tweet = { context };
    await axios.post(`${import.meta.env.VITE_TWEET_API_URL}/tweets/`, tweet);
    onNewTweet(tweet);
    setContext('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Tweet"
        type="text"
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Tweet
      </Button>
    </form>
  );
};
