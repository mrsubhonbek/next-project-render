'use client';

import { Button } from '#/ui/button';
import React from 'react';

export const BuggyButton = () => {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  return (
    <Button
      kind="error"
      onClick={() => {
        setClicked(true);
      }}
    >
      Trigger Error
    </Button>
  );
};
