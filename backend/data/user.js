import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234567', 12),
    isAdmin: true,
  },
  {
    name: 'Jimmy',
    email: 'jimmy@example.com',
    password: bcrypt.hashSync('1234567', 12),
    isAdmin: false,
  },
  {
    name: 'Maria',
    email: 'maria@example.com',
    password: bcrypt.hashSync('1234567', 12),
    isAdmin: false,
  },
  {
    name: 'Allen',
    email: 'allen@example.com',
    password: bcrypt.hashSync('1234567', 12),
    isAdmin: false,
  },
];

export default users;
