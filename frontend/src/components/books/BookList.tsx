import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

interface Book {
  title: string;
  url: string;
  comment: string;
}

interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{book.title}</TableCell>
              <TableCell>
                <a href={book.url} target="_blank" rel="noopener noreferrer">
                  {book.url}
                </a>
              </TableCell>
              <TableCell>{book.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
