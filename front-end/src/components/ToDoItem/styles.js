import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  deleteContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 16,
    color: theme.colors.lightGray,
    marginBottom: 6,
    minWidth: "100%",
  },
  titleChecked: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 16,
    color: theme.colors.darkGray,
    marginBottom: 6,
    textDecorationLine: "line-through",
    minWidth: "100%",
  },
  description: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 12,
    color: theme.colors.lightGray,
    minWidth: "100%",
  },
  descriptionChecked: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 12,
    color: theme.colors.darkGray,
    textDecorationLine: "line-through",
    minWidth: "100%",
  },
  checkBox: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.lightGray,
    borderWidth: 1,
  },
  checkBoxChecked: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    backgroundColor: theme.colors.secondary,
  },
});
