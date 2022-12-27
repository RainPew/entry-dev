import { gql } from '@apollo/client'

export const GET_ANIMALS = gql`
query {
    animals{
        _id
        name
        age
    }
  }
`
export const GET_USERS = gql`
query{
    users {
      firstName
      lastName
      email
      password
      age
    }
  }
`

export const LOGIN_ANIMALS = gql`
mutation loginPage($userSignin: UserSignInInput!){
    user:signinUser(userSignin:$userSignin){
       token
    }
  }
`

export const SIGN_UP_USER = gql`
mutation createUser($userNew: UserInput!){
    user:signupUser(userNew:$userNew){
        firstName
        lastName
        email
        password
        age
    }
  }
`