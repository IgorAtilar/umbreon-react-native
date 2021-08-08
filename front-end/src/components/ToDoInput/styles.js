import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  inputContainer: {
    paddingHorizontal: 20,
    width: "80%",
  },
  titleInput: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 16,
    color: theme.colors.lightGray,
    marginBottom: 6,
  },
  descriptionInput: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 12,
    color: theme.colors.lightGray,
  },
  iconContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
});
