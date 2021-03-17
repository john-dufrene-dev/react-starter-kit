import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { StickyLayout } from '../../components/Layout/StickyLayout/StickyLayout';
import { Counter } from '../../redux/counter/Counter';

const Test = () => {
  return (
    <StickyLayout>
      <Box m={3}>
        <Typography variant="h1" align="center">{`Test page`}</Typography>
      </Box>
      <Counter />
    </StickyLayout>
  );
}

export default Test
