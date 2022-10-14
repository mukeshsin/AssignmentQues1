// import sequelize 
import { Sequelize } from "sequelize";

// import connection 
import db from "../config/db.config.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const user = db.define('users', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
    autoIncrement: true,
    primaryKey: true

  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.VIRTUAL,
    allowNull: false,
    validate: {
      notNull: {
        message: 'A password is require'
      },
      notEmpty: {
        message: 'Please provide a password'
      },
      len: {
        args: [8, 15],
        message: 'The password should be between 8 and 20 characters in'
      }
    }
  },
  confirmPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    set(val) {
      if (val === this.password) {
        const hashedPassword = bcrypt.hashSync(val, 10);
        this.setDataValue('confirmedPassword', hashedPassword);

      }
    },
    validate: {
      notNull: {
        message: 'Both passwords must match'
      }

    }
  },
  emailId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false

  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allownull: false,
    references: {
      model: "roles",
      key: "id"
    }
  }
}, {
  //  freeze Table Name
  freezetableName: "true",
  tableName: "users"
});

// Export model User
export default user;




