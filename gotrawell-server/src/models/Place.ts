import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';

class Place extends Model {
  public id!: number;
  public name!: string;
  public country!: string;
  public photo!: string;
}

Place.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Place',
});

export default Place;
