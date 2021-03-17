import { makeStyles } from '@material-ui/core/styles';

export const stickyLogoStyles = makeStyles((theme) => ({
    logo: {
        textAlign: "center",
        fontSize: "40px",
    },
    top: {
        color:
            theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
    bottom: {
        color:
            theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[200],
        marginTop: "10px",
    },
}));

