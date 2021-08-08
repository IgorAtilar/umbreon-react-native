import React, { useState, useEffect } from "react";

import { View, TextInput, FlatList } from "react-native";

import { useQuery } from "@apollo/client";

import ToDoInput from "../../components/ToDoInput";

import ToDoItem from "../../components/ToDoItem";

import { ALL_TODOS } from "../../helpers/queries";

import { getToDoListTitle, setToDoListTitle } from "../../helpers/storage";

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";

const Home = () => {
  const [titleText, setTitleText] = useState();

  const { data } = useQuery(ALL_TODOS);

  const handleSetTitle = async () => {
    await setToDoListTitle(titleText);
  };

  useEffect(() => {
    const handleInitialState = async () => {
      const title = await getToDoListTitle();
      if (typeof title !== "string") {
        setTitleText(null);
      } else {
        setTitleText(title);
      }
    };
    handleInitialState();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder="To-do Title"
        placeholderTextColor={theme.colors.overlayGray}
        value={titleText}
        onChangeText={(text) => setTitleText(text)}
        onSubmitEditing={handleSetTitle}
      />
      <ToDoInput />
      {data && (
        <FlatList
          data={data.allToDos}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ToDoItem
              title={item.title}
              description={item.description}
              id={item.id}
              check={item.check}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
