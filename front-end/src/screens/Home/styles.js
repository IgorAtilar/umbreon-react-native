import { StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: getStatusBarHeight() + 32,
    paddingBottom: 32,
  },
  title: {
    textAlign: "center",
    fontFamily: theme.fonts.titleBold,
    fontSize: 24,
    color: theme.colors.lightGray,
    marginBottom: 36,
  },
});
