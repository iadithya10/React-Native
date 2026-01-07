import { Text, View, ScrollView, StyleSheet, Linking, Image } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Profile Image */}
      <Image
        source={require("../../assets/images/profile.jpg")}
        style={styles.profileImage}
      />

      {/* Header */}
      <Text style={styles.name}>Hi, I'm Adithya Babu</Text>
      <Text style={styles.role}>Full Stack Developer | Software Engineer</Text>

      {/* About */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.text}>
        I design and build scalable backend systems and modern full-stack
        applications that turn real-world problems into efficient, impactful
        software solutions.
      </Text>

      {/* Social Links */}
      <Text style={styles.sectionTitle}>Connect With Me</Text>
      <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/iadithya10")}>
        🔗 GitHub
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#0d1117",
    flexGrow: 1,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // makes it circular
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#58a6ff",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#58a6ff",
    textAlign: "center",
  },
  role: {
    fontSize: 16,
    color: "#c9d1d9",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#58a6ff",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 14,
    color: "#c9d1d9",
    lineHeight: 20,
    marginTop: 5,
  },
  link: {
    fontSize: 16,
    color: "#58a6ff",
    marginTop: 10,
  },
});
