import { gql } from "@apollo/client";


export const CREATE_USER = gql`
mutation createUser($input: GUserInput!){
    createUser(input: $input) {
      _id
      username
      firstName
      lastName
      email
      isActive
      createdBy {
        _id
        username
        fullName
      }
    }
  }
`