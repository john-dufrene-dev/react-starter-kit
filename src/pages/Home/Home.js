import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { StickyLayout } from '../../components/Layout/StickyLayout/StickyLayout';

const Home = () => {
  return (
    <StickyLayout>
      <Box m={3}>
        <Typography variant="h1" align="center">{`Home page`}</Typography>
      </Box>
    </StickyLayout>
  );
}

export default Home
