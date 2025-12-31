import React from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";

const SettingScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          onValueChange={setNotificationsEnabled}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch onValueChange={setDarkModeEnabled} value={darkModeEnabled} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Account Information</Text>
        <Text style={styles.settingValue}>Manage your account details</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Privacy Policy</Text>
        <Text style={styles.settingValue}>Read our privacy policy</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Terms of Service</Text>
        <Text style={styles.settingValue}>Read our terms of service</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>App Version</Text>
        <Text style={styles.settingValue}>1.0.0</Text>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  settingLabel: {
    fontSize: 18,
    color: "#333",
  },
  settingValue: {
    fontSize: 16,
    color: "#777",
  },
});
