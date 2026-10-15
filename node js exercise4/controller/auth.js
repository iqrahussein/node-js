import user from '../model/user.js';
import { generateToken } from '../utils/generateToken.js';

// REGISTER
export const register = async (req, res, next) => {
  let { name, email, password } = req.body;
  try {
    email=email.toLowerCase();
    const exists = await user.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });

    const users = await user.create({...req.body});
    const token = generateToken(user._id);
    res.status(201).json( {token} );
  } catch (err) {
    next(err);
  }
};

//login

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const users = await user.findOne({ email });
    if (!users || !(await users.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};