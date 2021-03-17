import { makeStyles } from '@material-ui/core/styles';

export const stickyFooterStyles = makeStyles((theme) => ({
    main: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));
