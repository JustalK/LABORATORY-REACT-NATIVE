import React, { useState, useRef } from 'react';
import { Button, SafeAreaView, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Image, TextInput, Switch } from 'react-native';
import Layout from 'src/components/Layout';

const Experience = () => {
  const input = useRef();
  const [isEnabled, setIsEnabled] = useState(false);
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

  const onChangeText = (e) => {
    console.log(e);
  };

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
          <TextInput onChangeText={onChangeText} ref={input} placeholder="PLACEHOLDER" numberOfLines={2} />
          <Button title="Value of input" onPress={() => console.log(input.current.value)} />
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(true)}
            value={isEnabled}
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
