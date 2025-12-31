import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { projectsData } from "@/data/projects";
import { useLocalSearchParams } from "expo-router";

const ProjectDetail = () => {
  const { projectId } = useLocalSearchParams();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Project not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.longDescription}</Text>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Technologies Used:</Text>
        <View style={styles.techContainer}>
          {project.technologies.map((tech, index) => (
            <Text key={index} style={styles.techTag}>
              {tech}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Duration:</Text>
        <Text style={styles.infoText}>
          {project.startDate} to {project.endDate}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 20,
  },
  infoSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  techTag: {
    backgroundColor: "#007bff",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});

export default ProjectDetail;
