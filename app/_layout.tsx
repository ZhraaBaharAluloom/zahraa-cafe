import { Stack } from "expo-router";
// Stack
// Slot
// Tab
// Drawer
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="tabs"
        options={{
          title: "",
          headerBackTitle: "Home",
        }}
      />
    </Stack>
  );
}
