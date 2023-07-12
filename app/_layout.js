import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "DM-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DM-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DM-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  )
};

export default Layout;