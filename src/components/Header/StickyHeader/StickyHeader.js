import { stickyHeaderStyles } from './styles'
import { AccountMenu } from '../../../containers/Menu/Account/MenuAccount'

export const StickyHeader = () => {
    const classes = stickyHeaderStyles();

    return (
        <header className={classes.main}>
            <AccountMenu />
        </header>
    );
}