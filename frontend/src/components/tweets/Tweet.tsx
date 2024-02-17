import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface TweetProps {
  tweet: {
    id: number;
    context: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">{tweet.context}</Typography>
      </CardContent>
    </Card>
  );
};
