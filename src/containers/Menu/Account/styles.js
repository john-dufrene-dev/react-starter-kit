import { makeStyles } from '@material-ui/core/styles';

export const AccountMenuStyles = makeStyles((theme) => ({
    navBarTop: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    navBarBottom: {
        position: "fixed",
        top: "auto",
        bottom: 0,
    },
    header: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    menuButton: {
        color:
            theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[200],
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
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