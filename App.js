import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  function inputHandler(event) {
    setGoal(event);
  }

  const handleSubmit = () => {
    setGoalsList((currentGoalList) => [...currentGoalList, goal]);
    setGoal('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <Button onPress={handleSubmit} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList?.map((g, i) => (
          <Text key={i}>{g}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
