// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Role = db.define('roles', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
},{
  //  Table Name
  tableName:"roles",
});

// Export model Product
export default Role;
 