import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Tweet } from '../components/tweets/Tweet';
import { Book } from '../components/books/Book';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/tweets" element={<Tweet />} />
      <Route path="/books" element={<Book />} />
    </Routes>
  );
};
