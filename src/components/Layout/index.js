import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const Layout = ({ children, navigation }) => (
  <View style={styles.wrap}>
    <View style={styles.navigation}>
      <Button title="Experience 0" onPress={() => navigation.navigate('Experience 0')} />
      <Button title="Experience 1" onPress={() => navigation.navigate('Experience 1')} />
    </View>
    <View style={styles.content}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
  },
  navigation: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
});

export default Layout;
