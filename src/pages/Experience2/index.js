import React, { useState } from 'react';
import { Button, SafeAreaView, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Image } from 'react-native';
import Layout from 'src/components/Layout';

const Experience = () => {
  const [data, setData] = useState([
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
  ]);

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text>Test</Text>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="#00ff00" />
          <Button title="test" disabled />
          <Button title="Add to data" onPress={() => setData([...data, { title: 'New test' }])} />
          <FlatList
            numColumns={2}
            data={data}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item.title}
          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: 'blue',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Experience;
