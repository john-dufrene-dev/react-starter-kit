import { Fragment } from 'react'
import { Backdrop, CircularProgress } from "@material-ui/core";

import { stickyBackDropStyles } from './styles'

export const RouterSpinner = () => {
    const classes = stickyBackDropStyles();

    return (
        <Fragment>
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress className={classes.circular} color="inherit" />
            </Backdrop>
        </Fragment>
    )
}