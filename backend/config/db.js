const { Pool } = require("pg");

const pool = new Pool({
  user: "e-clinic",
  host: "postgres",
  database: "postgis_35_sample",
  password: "elizabeth",
  port: 5432, // Default PostgreSQL port
});

pool.connect()
  .then(() => console.log("PostgreSQL Connected!"))
  .catch(err => console.error("PostgreSQL Connection Error:", err));

module.exports = pool;
