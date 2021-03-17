import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// import { stickyCopyrightStyles } from './styles'

export const StickyCopyright = () => {
    // const classes = stickyCopyrightStyles();
    return (
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">{`Your Website`} </Link>
            {' '}{new Date().getFullYear()}{'.'}
        </Typography>
    );
}
