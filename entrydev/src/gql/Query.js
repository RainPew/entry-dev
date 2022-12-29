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