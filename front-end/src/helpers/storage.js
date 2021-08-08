import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToDoListTitle = async (title) => {
  try {
    await AsyncStorage.setItem("@todoListTitle", title);
  } catch (e) {
    console.log(e);
  }
};

export const getToDoListTitle = async () => {
  try {
    const responseTitle = await AsyncStorage.getItem("@todoListTitle");
    if (responseTitle !== null) return responseTitle;
  } catch (e) {
    console.log(e);
  }
};
