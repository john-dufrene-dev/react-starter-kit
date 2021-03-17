import React from 'react';
import Container from '@material-ui/core/Container';

import { StickyFooter } from '../../Footer/StickyFooter/StickyFooter'
import { StickyHeader } from '../../Header/StickyHeader/StickyHeader'
import { stickyLayoutStyles } from './styles'

export const StickyLayout = (props) => {
    const classes = stickyLayoutStyles();

    return (
        <div className={classes.root}>
            <StickyHeader />
            <Container component="main" className={classes.main} maxWidth="md">
                {props.children}
            </Container>
            <StickyFooter />
        </div>
    );
}
