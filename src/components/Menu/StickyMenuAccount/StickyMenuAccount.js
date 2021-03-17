import { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu as MenuIcon, Home, Search, Person } from '@material-ui/icons';
import { Button, BottomNavigation, BottomNavigationAction as Bna, MenuItem, Menu } from "@material-ui/core";
import { useIsAuthenticated } from 'react-auth-kit';

import { stickyMenuAccountStyles } from './styles';
import { DialogMobileSearch } from '../../Modal/StickyModalSearch/StickyModalSearch'
import { DarkMode } from '../../../redux/theme/DarkMode'
import { _menus } from '../../../config/menus';

const m = _menus;

export const AccountMenuDesktop = () => {
    const isAuthenticated = useIsAuthenticated();
    const { menuButton } = stickyMenuAccountStyles();
    const [open, setOpen] = useState(null);

    const handleClick = e => setOpen(e.currentTarget);
    const handleClose = () => setOpen(null);

    if (isAuthenticated()) {
        return (
            <div>
                {/* @Todo add user */}
                <Button aria-controls="account-m" aria-haspopup="true"
                    onClick={handleClick} className={menuButton}>
                    <Person />
                </Button>
                <Menu id="account-m" anchorEl={open} keepMounted open={Boolean(open)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }

    return (
        <div>
            <DarkMode />
            <Button to={m.login.to} component={Link} className={menuButton}> {m.login.label} </Button>
            <Button to={m.register.to} component={Link} className={menuButton}> {m.register.label} </Button>
        </div>
    );
};

export const AccountMenuMobile = () => {
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();
    const [nav, setNav] = useState(history.location.pathname)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleChange = val => setNav(val);

    return (
        <Fragment>
            <BottomNavigation value={nav} onChange={(e) => handleChange(e.target.value)} showLabels={true} >
                <Bna label={m.home.label} value={m.home.to} icon={<Home />} component={Link} to={m.home.to} />
                <Bna onClick={handleClickOpen} label={m.search.label} icon={<Search />} />
                <Bna label={m.account.label} value={isAuthenticated() ? m.login.to : m.account.to}
                    icon={<Person />} component={Link} to={m.account.to} />
                <Bna label="More" icon={<MenuIcon />} />
            </BottomNavigation>
            <DialogMobileSearch open={open} setOpen={setOpen} />
        </Fragment>
    )
};
