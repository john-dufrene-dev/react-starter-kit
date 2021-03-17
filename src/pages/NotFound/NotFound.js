import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { StickyLayout } from '../../components/Layout/StickyLayout/StickyLayout';

const NotFound = () => {
    return (
        <StickyLayout>
            <Box m={3}>
                <Typography variant="h1" align="center">{`404 Not Found`}</Typography>
            </Box>
        </StickyLayout>
    );
}

export default NotFound
