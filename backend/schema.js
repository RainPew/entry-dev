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
    addAnimals(addInput: AddInput): Animal
    updateAnimals(_id: ID!, addInput: AddInput): Animal!
    deletelAnimals(_id: ID!): Animal
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
  input AddInput{
    name: String
    age: String
}
`;
export default typeDefs