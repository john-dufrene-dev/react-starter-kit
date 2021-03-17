import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { StickyLayout } from '../../components/Layout/StickyLayout/StickyLayout';

const Account = () => {
  return (
    <StickyLayout>
      <Box m={3}>
        <Typography variant="h1" align="center">{`Account page`}</Typography>
      </Box>
    </StickyLayout>
  );
}

export default Account
