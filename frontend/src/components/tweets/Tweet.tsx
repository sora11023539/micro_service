import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface TweetProps {
  tweet: {
    id: number;
    title: string;
    body: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{tweet.title}</Typography>
        <Typography variant="body2">{tweet.body}</Typography>
      </CardContent>
    </Card>
  );
};
