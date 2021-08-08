import { gql } from "@apollo/client";

export const MAKE_TODO = gql`
  mutation makeToDo($data: ToDoInput) {
    makeToDo(data: $data) {
      id
      title
      description
      check
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteToDo($id: Int!) {
    deleteToDo(id: $id)
  }
`;

export const UPDATE_TODO = gql`
  mutation updateToDo($id: Int!, $data: ToDoInput) {
    updateToDo(id: $id, data: $data) {
      id
      title
      description
      check
    }
  }
`;
