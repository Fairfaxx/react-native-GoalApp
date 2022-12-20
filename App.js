import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  function inputHandler(event) {
    setGoal(event);
  }

  const handleSubmit = () => {
    setGoalsList((currentGoalList) => [
      ...currentGoalList,
      { text: goal, id: Math.random().toString() },
    ]);
    setGoal('');
  };

  function deleteGoalHandler(id) {
    setGoalsList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput
          inputHandler={inputHandler}
          goal={goal}
          onDeleteItem={deleteGoalHandler}
        />
        <Button onPress={handleSubmit} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onDeleteItem={deleteGoalHandler}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
        />
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
  goalsContainer: {
    flex: 5,
  },
});
