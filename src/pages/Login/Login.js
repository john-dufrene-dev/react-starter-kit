import React from 'react';
import { Redirect } from 'react-router-dom'
import { Typography, Box } from '@material-ui/core';
import { useIsAuthenticated } from 'react-auth-kit';

import { _routes } from '../../config/routes'
import { StickyLayout } from '../../components/Layout/StickyLayout/StickyLayout';

const Login = () => {
  const isAuthenticated = useIsAuthenticated()

  if (isAuthenticated()) {
    return <Redirect to={_routes._account} />
  }

  return (
    <StickyLayout>
      <Box m={3}>
        <Typography variant="h1" align="center">{`Login page`}</Typography>
      </Box>
    </StickyLayout>
  );
}

export default Login;
