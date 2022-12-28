// resolvers
import bcrypt from 'bcrypt';
import mongoose from 'mongoose'
import { animals, users } from './db.js';


const User = mongoose.model("User")
const Animal = mongoose.model("Animals")
import jwt from 'jsonwebtoken';
import { JWT } from './config.js';


export const resolvers = {
  Query: {
    animals: () => animals,
    animal: (_, { _id }) => animals.find(animal => animal._id == _id),
    users: () => users
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email })
      if (user) {
        throw new Error("User already exists")
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12)
      const newUser = new User({
        ...userNew,
        password: hashedPassword
      })
      return await newUser.save()
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email })
      const doMatch = await bcrypt.compare(userSignin.password, user.password)
      if (!doMatch) {
        throw new Error("email or password in invalid")
      }
      if (!user) {
        throw new Error("email of password in invalid")
      }
      const token = jwt.sign({ userId: user._id }, JWT)
      return { token }
    },
    addAnimals: (parent, args) =>{
      const anm = new Animal(args.addInput)
      return anm.save()
    },
    updateAnimals:(parent, args) =>{
      return Animal.findByIdAndUpdate(args._id, args.addInput, {new: true})  
    },
    deletelAnimals: (parent, args) => {
      return animals.findByIdAndDelete(args._id)
    }
  }
};