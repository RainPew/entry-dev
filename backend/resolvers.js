// resolvers
import bcrypt from 'bcrypt';
import mongoose from 'mongoose'



const User  = mongoose.model("User")


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
          throw new Error("user already")
        }
        const hashedPassword = await bcrypt.hash(userNew.password, 12)
        const newUser = new User({
          ...userNew,
          password: hashedPassword
        })
       return await newUser.save()
      }
    }
  };