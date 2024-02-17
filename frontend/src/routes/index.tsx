import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TweetList } from '../components/tweets/TweetList';
import { CreateTweet } from '../components/tweets/CreateTweet';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/tweets" element={<TweetList />} />
      <Route path="/tweets/create" element={<CreateTweet />} />
    </Routes>
  );
};
