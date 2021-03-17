import { Typography, Link, useTheme } from '@material-ui/core';
import { useWindowWidth } from '@react-hook/window-size'

import { stickyLogoStyles } from './styles'
import { _routes } from '../../../config/routes'

export const StickyLogo = () => {
    const onlyWidth = useWindowWidth();
    const theme = useTheme();
    const classes = stickyLogoStyles();

    const displayLogo = onlyWidth < theme.breakpoints.values.md ? classes.bottom : classes.top;
    const color = theme.palette.type === 'light' ? 'primary' : 'secondary';

    return (
        <Typography variant="h6" component="h1" className={`${classes.logo} ${displayLogo}`}>
            <Link color={color} underline="none" href={_routes._home}>{`StyckyLogo`}</Link>
        </Typography>
    );
}
