import React from 'react';
import { Link } from '@material-ui/core';

export const Top: React.FC = () => {
  return (
    <div>
      <Link href="/tweets">Tweet Page</Link>
      <br />
      <Link href="/books">Book Page</Link>
    </div>
  );
};
