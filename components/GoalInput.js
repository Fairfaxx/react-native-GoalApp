import React from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({
  inputHandler,
  goal,
  handleSubmit,
  modalVisible,
  cancelGoalHandler,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={cancelGoalHandler}
              title="Cancel"
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={handleSubmit} title="Add Goal" color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 21,
  },
});
