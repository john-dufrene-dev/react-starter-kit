import { Typography, Link, useTheme } from '@material-ui/core';
import { useWindowWidth } from '@react-hook/window-size'

import { AccountMenuStyles } from '../styles'
import { _routes } from '../../../../config/routes'

export const StickyLogo = () => {
    const onlyWidth = useWindowWidth();
    const theme = useTheme();
    const { top, bottom, logo } = AccountMenuStyles();

    const displayLogo = onlyWidth < theme.breakpoints.values.md ? bottom : top;
    const color = theme.palette.type === 'light' ? 'primary' : 'secondary';

    return (
        <Typography variant="h6" component="h1" className={`${logo} ${displayLogo}`}>
            <Link color={color} underline="none" href={_routes._home}>{`StyckyLogo`}</Link>
        </Typography>
    );
}