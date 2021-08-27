import React from 'react';
import { Text, Button } from 'react-native';

const Experience = ({ navigation }) => (
  <>
    <Button title="Experience 1" onPress={() => navigation.navigate('Experience 1')} />
    <Button title="Experience 1" onPress={() => navigation.navigate('Experience 1')} />
    <Text>Experience 2</Text>
  </>
);

export default Experience;
