import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ onDeleteItem, text, id }) => {
  return (
    <View style={styles.listStyle}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => (pressed ? styles.pressedItem : '')}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    backgroundColor: '#5e0acc',
    margin: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    fontSize: 14,
    padding: 8,
  },
});
