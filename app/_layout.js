import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="LandingPage"/>
      <Stack.Screen name="Login"/>
      <Stack.Screen name="SignUp"/>
    </Stack>
  );
}
