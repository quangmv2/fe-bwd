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

export const UPDATE_USER = gql`
mutation updateUser($input: GUserInput!, $id: ID!){
  updateUser(input: $input, id: $id) {
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

export const REMOVE_USERS = gql`
mutation removeUsers($ids: [ID!]){
  removeUsers(ids: $ids) {
    _id
  }
}
`