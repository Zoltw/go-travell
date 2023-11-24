import { Sequelize } from 'sequelize';
import path from 'path';
import fs from 'fs';

const dbPath = path.resolve(__dirname, './database.sqlite');

const dir = path.dirname(dbPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});


export default sequelize;
