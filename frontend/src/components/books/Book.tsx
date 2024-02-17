import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookForm } from './BookForm';
import { BookList } from './BookList';

export const Book: React.FC = () => {
  const [books, setBooks] = useState<{ title: string; url: string; comment: string }[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BOOK_API_URL}/books/`);
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handlePost = (book: { title: string; url: string; comment: string }) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <div>
      <BookForm onPost={handlePost} />
      <BookList books={books} />
    </div>
  );
};
