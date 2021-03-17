import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { useSelector } from 'react-redux';

import { defaultTheme } from "../../config/theme";
import { selectDarkMode } from '../../redux/theme/darkModeSlice';

export const useThemeConfig = () => {
    const theme = useSelector(selectDarkMode);
    defaultTheme.palette.type = theme;

    const themeConfig = createMuiTheme(defaultTheme);
    const responsiveThemeConfig = responsiveFontSizes(themeConfig);

    return responsiveThemeConfig;
};
