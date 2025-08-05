import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: "☕" }} />
      <Stack.Screen name="index" options={{ title: "Home 🏡" }} />
    </Stack>
  );
}
