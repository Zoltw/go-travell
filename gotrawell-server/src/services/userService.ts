import bcrypt from 'bcrypt';
import User from '../models/User';

export const createUser = async (userData: { email: string, password: string }): Promise<User | null> => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return User.create({
    email: userData.email,
    password: hashedPassword,
  });
};

export const loginUser = async (email: string, password: string): Promise<User | null> => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  return passwordMatch ? user : null;
};

export const getUser = async (userId: number): Promise<User | null> => {
  return User.findByPk(userId);
};
