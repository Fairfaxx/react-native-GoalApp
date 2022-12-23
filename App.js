import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function inputHandler(event) {
    setGoal(event);
  }

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const cancelGoalHandler = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {
    setGoalsList((currentGoalList) => [
      ...currentGoalList,
      { text: goal, id: Math.random().toString() },
    ]);
    setGoal('');
    cancelGoalHandler();
  };

  function deleteGoalHandler(id) {
    setGoalsList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#a76df2"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          modalVisible={modalVisible}
          cancelGoalHandler={cancelGoalHandler}
          inputHandler={inputHandler}
          handleSubmit={handleSubmit}
          goal={goal}
          onDeleteItem={deleteGoalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});
