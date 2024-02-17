import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TweetList } from './TweetList';
import { TweetForm } from './TweetForm';

export interface Tweet {
  context: string;
}

export const Tweet: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const res = await axios.get(`${import.meta.env.VITE_TWEET_API_URL}/tweets/`);
      setTweets(res.data);
    };
    fetchTweets();
  }, []);

  const handleNewTweet = (tweet: Tweet) => {
    setTweets((prevTweets) => [tweet, ...prevTweets]);
  };

  return (
    <div>
      <TweetForm onNewTweet={handleNewTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
};
