import React from 'react';
import { Tweet } from './Tweet';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@material-ui/core';

interface TweetListProps {
  tweets: Tweet[];
}

export const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <Card key={index}>
          <CardHeader avatar={<Avatar>U</Avatar>} title="Username" subheader="@User" />
          <CardContent>
            <Typography variant="body2">{tweet.context}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
