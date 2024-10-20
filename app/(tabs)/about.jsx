import React from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Me</Text>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Onesmus Bett</Text>.
      </Text>
      <Text style={styles.text}>
        I am a computer science student with knowledge in:
      </Text>
      <Text style={styles.listText}>
        - Python
      </Text>
      <Text style={styles.listText}>
        - Django
      </Text>
      <Text style={styles.listText}>
        - React JS
      </Text>
      <Text style={styles.listText}>
        - HTML
      </Text>
      <Text style={styles.listText}>
        - CSS
      </Text>
      <Text style={styles.listText}>
        - JavaScript
      </Text>
      <Text style={styles.listText}>
        - Tailwind CSS
      </Text>
      <Text style={styles.listText}>
        - React Native
      </Text>
      <Text style={styles.text}>
        You can find my projects on GitHub:
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/onesmuskipchumba0')}>
        <Text style={styles.link}>GitHub Profile</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Feel free to contact me at: <Text style={styles.boldText}>0792400709</Text>
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E2C', // Primary color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E63946', // Accent color for header
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff', // White text for better readability
    marginBottom: 10,
  },
  listText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#E63946', // Accent color for link
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
