import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
  },
  taskContainer: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 24,
  },
  taskCreated: {
    color: theme.colors.brand.blue,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.bold,
  },
  tasksDone: {
    color: theme.colors.brand.purple,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.bold,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterContainer: {
    backgroundColor: theme.colors.base.gray300,
    width: 20,
    height: 16,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  counterText: {
    color: theme.colors.base.gray100,
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.bold,
  },
});
