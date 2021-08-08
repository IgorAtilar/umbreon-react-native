import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
  query allToDos {
    allToDos {
      id
      title
      description
      check
    }
  }
`;
