import { Button, StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
  },
  form: {
    position: "absolute",
    bottom: -52 / 2,
    height: 54,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 54,
    width: "75%",
    backgroundColor: theme.colors.base.gray500,
    color: theme.colors.base.gray100,
    borderRadius: 8,
    padding: 16,
    fontSize: 18,
    borderColor: theme.colors.base.gray700,
    borderWidth: 1,
  },
  button: {
    height: 54,
    width: 54,
    backgroundColor: theme.colors.brand.blue_dark,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
