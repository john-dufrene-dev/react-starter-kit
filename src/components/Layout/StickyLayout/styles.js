import { makeStyles } from '@material-ui/core/styles';

export const stickyLayoutStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth:'320px',
        minHeight: '92vh',
        [theme.breakpoints.up('md')]: {
            minHeight: '100vh',
        },
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
}));
