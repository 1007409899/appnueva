import Jwt from 'jsonwebtoken'
/* import { appmodel } from '../models/User'; */
export const SignUp = async(req, res) => {
    /*   try {
          // Getting the Request Body
          const { username, email, password, } = req.body;
          // Creating a new User Object
          const newUser = new appmodel({
              username,
              email,
              password: await appmodel.encryptPassword(password),
          });

          // checking for roles


          // Saving the User Object in Mongodb
          const savedUser = await newUser.save();

          // Create a token
          const token = Jwt.sign({ id: savedUser._id }, "apirest", {
              expiresIn: 86400, // 24 hours
          });

          return res.status(200).json({ token });
      } catch (error) {
          console.log(error);
          return res.status(500).json(error);
      } */
};

export const Signin = async(req, res) => {


};