import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { TaskDTO } from "../../dtos/taksDTO";

type TaskProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};
export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={22}
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
        ></MaterialCommunityIcons>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.TextDone : styles.TextCreated}>
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onTaskDeleted(id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.base.gray200}
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
}
