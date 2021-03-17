import { makeStyles } from '@material-ui/core/styles';

export const stickyHeaderStyles = makeStyles((theme) => ({
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
}));
