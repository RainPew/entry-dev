// schema
export const typeDefs = `
  type Query {
   animals: [Animal]
   animal(_id:ID!): Animal
   users: [Users]
  }

  type Animal {
   _id : ID!
   name: String
   age: String
  }

  type Users{
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password:String
    age: String
  }

  type Mutation{
    signupUser(userNew:UserInput!):Users
  }
  
  input UserInput{
     firstName:String!,
     lastName:String!,
     email:String!,
     password:String!
  }
`;