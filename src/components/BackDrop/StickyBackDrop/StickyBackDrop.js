import { Backdrop, CircularProgress } from "@material-ui/core";

import { stickyBackDropStyles } from './styles'

export const RouterSpinner = () => {
    const classes = stickyBackDropStyles();

    return (
        <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress className={classes.circular} color="inherit" />
        </Backdrop>
    )
}

export const LoadingSpinner = () => {
    const classes = stickyBackDropStyles();

    return (
        <CircularProgress className={classes.circular} color="inherit" />
    )
}