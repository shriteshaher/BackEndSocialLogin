import mysql from "mysql2/promise";
import * as dotenv from 'dotenv' 
dotenv.config()
const Connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database:process.env.database
});
export default Connection;