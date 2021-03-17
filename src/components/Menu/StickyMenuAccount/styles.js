import { makeStyles } from '@material-ui/core/styles';

export const stickyMenuAccountStyles = makeStyles((theme) => ({
    menuButton: {
        color:
            theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[200],
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
}));
