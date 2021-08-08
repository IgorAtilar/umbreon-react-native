import React, { useState } from "react";

import { TextInput, View, Keyboard } from "react-native";

import { useMutation } from "@apollo/client";

import { Feather } from "@expo/vector-icons";

import { MAKE_TODO } from "../../helpers/mutations";

import { ALL_TODOS } from "../../helpers/queries";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const ToDoInput = () => {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const [addTodo] = useMutation(MAKE_TODO, {
    refetchQueries: [ALL_TODOS, "allToDos"],
  });

  const handleAddToDo = () => {
    if (titleText && descriptionText) {
      const todoInput = {
        title: titleText,
        description: descriptionText,
        check: false,
      };
      addTodo({ variables: { data: todoInput } });
      setTitleText("");
      setDescriptionText("");
      Keyboard.dismiss();
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          name="plus"
          size={42}
          color={theme.colors.lightGray}
          onPress={handleAddToDo}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          onChangeText={(text) => setTitleText(text)}
          value={titleText}
          placeholderTextColor={theme.colors.overlayGray}
          placeholder="Title"
          multiline
        />
        <TextInput
          style={styles.descriptionInput}
          onChangeText={(text) => setDescriptionText(text)}
          value={descriptionText}
          placeholderTextColor={theme.colors.overlayGray}
          placeholder="Description"
          multiline
        />
      </View>
    </View>
  );
};

export default ToDoInput;
