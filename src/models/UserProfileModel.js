import { Sequelize } from 'sequelize';
import db from '../config/database';
import Users from './UserModel'; // Asegúrate de que el modelo Users esté correctamente importado

const { DataTypes } = Sequelize;

const Profiles = db.define('profiles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    evaluationDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    unwantedFood: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
});

// Relación con el modelo Users
Profiles.belongsTo(Users, { foreignKey: 'userId' });

export default Profiles;
