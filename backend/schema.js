// schema
const typeDefs = `
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

  type Token{
    token: String
  }

  type Mutation{
    signupUser(userNew:UserInput!):Users
    signinUser(userSignin:UserSignInInput!):Token
  }
  
  input UserInput{
     firstName:String!,
     lastName:String!,
     email:String!,
     password:String!
  }

  input UserSignInInput{
    email:String!,
    password:String!
 }
`;
export default typeDefs