import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import { toggleDarkMode, toggleDarkModeChecked, selectDarkMode, selectDarkModeChecked } from './darkModeSlice';

export const DarkMode = (props) => {
    const darkMode = useSelector(selectDarkMode);
    const darkModechecked = useSelector(selectDarkModeChecked);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        checked: darkModechecked,
        selector: `${darkMode} mode`,
    });

    const handleThemeChecked = (event) => {
        dispatch(toggleDarkMode())
        dispatch(toggleDarkModeChecked())
        const tmp_selector = darkMode === "light" ? `dark mode` : `light mode`
        setState({ ...state, checked: JSON.parse(event.target.checked), selector: tmp_selector });
    }

    return (
        <Fragment>
            {props.withText && state.selector}
            <Switch checked={JSON.parse(state.checked)} onChange={handleThemeChecked} name="checked" />
        </Fragment>
    );
}
