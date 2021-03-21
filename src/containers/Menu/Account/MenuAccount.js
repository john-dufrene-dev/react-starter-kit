import React, { Fragment } from 'react';
import { AppBar, Toolbar, useTheme } from "@material-ui/core";
import { useWindowWidth } from '@react-hook/window-size'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { AccountMenuStyles } from './styles'
import { AccountMenuDesktop, AccountMenuMobile } from './components/Items';
import { StickyLogo } from './components/Logo';
import { HideOnScroll } from './components/HideOnScroll';
import { ScrollTop } from './components/ScrollTop';

export const AccountMenu = (props) => {
    const onlyWidth = useWindowWidth();
    const theme = useTheme();
    const { header, toolbar, navBarBottom } = AccountMenuStyles();

    const displayMobileView = onlyWidth < theme.breakpoints.values.md ? true : false;
    const displayLogoHeader = onlyWidth < theme.breakpoints.values.md ? <StickyLogo /> : false;

    const displayDesktop = () => {
        return (
            <Fragment>
                <HideOnScroll {...props}>
                    <AppBar className={header}>
                        <Toolbar className={toolbar}>
                            <StickyLogo />
                            <AccountMenuDesktop />
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar id="back-to-top-anchor" />
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </Fragment>
        );
    };

    const displayMobile = () => {
        return (
            <Fragment>
                {displayLogoHeader}
                <AppBar className={navBarBottom}>
                    <AccountMenuMobile />
                </AppBar>
            </Fragment>
        );
    };

    return (
        <Fragment>
            { displayMobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    );
}