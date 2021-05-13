import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation login($info: LoginInput!){
  login(info: $info){
    token
    userId
  }
}
`

export const LOGOUT = gql`
mutation {
    logout
}
`