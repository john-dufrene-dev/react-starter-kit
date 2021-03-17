import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { stickyFooterStyles } from './styles'
import { StickyCopyright } from '../../Copyright/StickyCopyright/StickyCopyright'

export const StickyFooter = () => {
    const classes = stickyFooterStyles();

    return (
        <footer className={classes.main}>
            <Container maxWidth="sm">
                <Typography>{`My copyright here.`}</Typography>
                <StickyCopyright />
            </Container>
        </footer>
    );
}
