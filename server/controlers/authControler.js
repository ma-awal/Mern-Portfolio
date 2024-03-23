import { AuthModel } from '../models/authModel.js';
import bcrypt from 'bcrypt';
// register
export const authRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new AuthModel({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });
    const user = await newUser.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const authLogin = async (req, res) => {
  try {
    const user = await AuthModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send('Wrong User');
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).send('Wrong Password');
    }

    const { password, ...other } = user._doc;
    setUsername(other.username);
    setEmail(other.email);
    setPassword('');
    res.status(200).send(other);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
