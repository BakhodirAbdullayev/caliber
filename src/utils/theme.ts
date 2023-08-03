interface IThemeItem {
  main: string;
  second: string;
  blackSecondary: string;
  blackPrimary: string;
  whitePrimary: string;
  whiteSecondary: string;
}

interface ITheme {
  light: IThemeItem;
  dark: IThemeItem;
}

export const theme: ITheme = {
  light: {
    main: "#03d7ab",
    second: "darkorange",
    blackPrimary: "#181818",
    blackSecondary: "#7c8595",
    whitePrimary: "#f2f2f2",
    whiteSecondary: "#e0e0e0",
  },
  dark: {
    main: "#03d7ab",
    second: "darkorange",
    blackPrimary: "#f2f2f2",
    blackSecondary: "#e0e0e0",
    whitePrimary: "#181818",
    whiteSecondary: "#7c8595",
  },
};
