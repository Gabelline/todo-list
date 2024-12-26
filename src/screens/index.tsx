import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/header";
import { Task } from "../components/task";
import { useState } from "react";
import { TaskDTO } from "../dtos/taksDTO";
import { Empty } from "../components/empty";
import { uuid } from "../utils/uuid";

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);
      setNewTask("");
    }
  }

  function handleTaskDone(id: string) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }
  function handleTaskDeleted(id: string) {
    Alert.alert("Excluir tarefa", "Deseja exluir essa tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  const totalTasksCreated = tasks.length;
  const totalTasksDone = tasks.filter((task) => task.isCompleted).length;
  return (
    <View style={styles.container}>
      <Header
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />
      <View style={styles.taskContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.taskCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCreated}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksDone}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDeleted(item.id)}
              {...item}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
}
