import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tweet } from './Tweet';

interface Tweet {
  id: number;
  title: string;
  body: string;
}

export const TweetList: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const res = await axios.get<Tweet[]>('http://localhost:3002/tweets');
      setTweets(res.data);
    };

    fetchTweets();
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
