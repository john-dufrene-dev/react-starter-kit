import React, { Fragment } from 'react';
import { AppBar, Toolbar, useTheme } from "@material-ui/core";
import { useWindowWidth } from '@react-hook/window-size'

import { stickyHeaderStyles } from './styles'
import { AccountMenuDesktop, AccountMenuMobile } from '../../Menu/StickyMenuAccount/StickyMenuAccount';
import { StickyLogo } from '../../Logo/StickyLogo/StickyLogo';

export const StickyHeader = () => {
    const onlyWidth = useWindowWidth();
    const theme = useTheme();
    const { header, toolbar } = stickyHeaderStyles();

    const displayMobileView = onlyWidth < theme.breakpoints.values.md ? true : false;
    const displayLogoHeader = onlyWidth < theme.breakpoints.values.md ? <StickyLogo /> : false;

    const displayDesktop = () => {
        return (
            <AppBar className={header}>
                <Toolbar className={toolbar}>
                    <StickyLogo />
                    <AccountMenuDesktop />
                </Toolbar>
            </AppBar>
        );
    };

    const displayMobile = () => {
        return (
            <Fragment>
                {displayLogoHeader}
                <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
                    <AccountMenuMobile />
                </AppBar>
            </Fragment>
        );
    };

    return (
        <header>
            {displayMobileView ? displayMobile() : displayDesktop()}
        </header>
    );
}
