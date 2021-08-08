import React, { useState } from "react";

import { View, TextInput } from "react-native";

import { useMutation } from "@apollo/client";

import { Feather } from "@expo/vector-icons";

import { DELETE_TODO, UPDATE_TODO } from "../../helpers/mutations";

import { ALL_TODOS } from "../../helpers/queries";

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";

const ToDoItem = ({ title, description, check, id }) => {
  const [textTitle, setTextTitle] = useState(title);
  const [textDescription, setTextDescription] = useState(description);
  const [isChecked, setIsChecked] = useState(check);

  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [ALL_TODOS, "allToDos"],
  });

  const [updateTodoCheck] = useMutation(UPDATE_TODO, {
    refetchQueries: [ALL_TODOS, "allToDos"],
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [ALL_TODOS, "allToDos"],
  });

  const handleDelete = () => {
    deleteTodo({ variables: { id: id } });
  };

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
    updateTodoCheck({ variables: { id: id, data: { check: !isChecked } } });
  };

  const handleUptate = () => {
    const todoInput = {
      title: textTitle,
      description: textDescription,
    };
    updateTodo({ variables: { id: id, data: todoInput } });
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "20%" }}>
        <View
          style={isChecked ? styles.checkBoxChecked : styles.checkBox}
          onTouchStart={handleCheck}
        >
          {isChecked && (
            <Feather name="check" size={32} color={theme.colors.primary} />
          )}
        </View>
      </View>
      <View style={styles.todoContainer}>
        <View>
          <TextInput
            value={textTitle}
            style={isChecked ? styles.titleChecked : styles.title}
            multiline
            onChangeText={(text) => setTextTitle(text)}
            onEndEditing={handleUptate}
            editable={!isChecked}
          />
          <TextInput
            value={textDescription}
            multiline
            style={isChecked ? styles.descriptionChecked : styles.description}
            onChangeText={(text) => setTextDescription(text)}
            onEndEditing={handleUptate}
            editable={!isChecked}
          />
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <Feather
          name="x"
          size={32}
          color={theme.colors.lightGray}
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};

export default ToDoItem;
