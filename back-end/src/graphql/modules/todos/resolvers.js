import db from "../../../db";

export default {
  Query: {
    allToDos: async () => await db("todos").orderBy("id", "asc"),
  },
  Mutation: {
    makeToDo: async (_, { data }) =>
      await (
        await db("todos").insert(data).returning("*")
      )[0],
    updateToDo: async (_, { id, data }) =>
      await (
        await db("todos").where({ id }).update(data).returning("*")
      )[0],
    deleteToDo: async (_, { id }) => {
      if (id) {
        return await db("todos").where({ id }).delete();
      }
      throw new Error(
        "Attention! Its not possible to delete an To-Do without your ID!"
      );
    },
  },
};
