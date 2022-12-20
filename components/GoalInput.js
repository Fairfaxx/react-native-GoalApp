import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const GoalInput = ({ inputHandler, goal }) => {
  return (
    <TextInput
      placeholder="Course Goal"
      style={styles.textInput}
      onChangeText={inputHandler}
      value={goal}
    />
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
