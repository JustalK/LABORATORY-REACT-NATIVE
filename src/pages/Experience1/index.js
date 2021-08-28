import React from 'react';
import { View, StyleSheet } from 'react-native';
import Layout from 'src/components/Layout';

const Experience = ({ navigation }) => (
  <Layout navigation={navigation}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red' }}>
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        <View style={{ flex: 1, backgroundColor: 'pink' }} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'darkorange',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <View style={[styles.box2, { backgroundColor: 'blue' }]} />
      </View>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  box2: {
    width: '50%',
    height: 50,
  },
});

export default Experience;
