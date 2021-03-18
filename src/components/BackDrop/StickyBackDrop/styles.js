import { makeStyles } from '@material-ui/core/styles';

export const stickyBackDropStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    circular: {
        animationDuration: '250ms',
    }
}));
