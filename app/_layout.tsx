import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home 🏠",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="menu/index"
        options={{
          title: "Home 🏠",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
