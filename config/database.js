// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('sequelize_db', 'root', '', {
    host: 'localhost',
    password:'singh@2023',
    dialect: 'mysql'
});
 
// export connection
export default db;