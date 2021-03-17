import { Fragment } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

// import { stickyModalSearch } from './styles';

export const DialogMobileSearch = props => {
    // const classes = stickyModalSearch();
    const handleClose = () => props.setOpen(false);

    return (
        <Fragment>
            <Dialog fullScreen open={props.open} onClose={handleClose}>
                <DialogTitle align="center">SEARCH</DialogTitle>
                <DialogContent align="center">
                    TODO Search
                </DialogContent>
                <DialogActions align="center">
                    <Button onClick={handleClose} color="primary"> Close </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}
