import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

interface BookFormProps {
  onPost: (book: { title: string; url: string; comment: string }) => void;
}

export const BookForm: React.FC<BookFormProps> = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const book = { title, url, comment };
    await axios.post(`${import.meta.env.VITE_BOOK_API_URL}/books/`, book);
    onPost(book);
    setTitle('');
    setUrl('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField label="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <TextField label="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
