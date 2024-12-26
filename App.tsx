import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { HomeScreen } from "./src/screens";
import { Loading } from "./src/components/loading";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  return (
    <>
      {fontsLoading ? <HomeScreen /> : <Loading />}
      <StatusBar style={"light"} backgroundColor="transparent" translucent />
    </>
  );
}
