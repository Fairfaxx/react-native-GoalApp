import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ onDeleteItem, text, id }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.listStyle}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    backgroundColor: '#5e0acc',
    padding: 8,
    margin: 8,
  },
  goalText: {
    color: 'white',
    fontSize: 14,
  },
});
