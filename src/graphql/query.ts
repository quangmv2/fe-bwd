import { gql } from "@apollo/client";

export const ME = gql`
query {
  me{
    _id
    username
    email
    firstName
    lastName
    fullName
    role {
      _id
      code
      description
    }
    permissions
    createdAt
    createdBy {
      _id
      username
    }
  }
}

`

export const USERS = gql`
query {
  users{
    _id
    username
    email
    firstName
    lastName
    fullName
    isLocked
    role {
      _id
      code
      description
    }
    permissions
    createdAt
    createdBy {
      _id
      username
    }
  }
}

`