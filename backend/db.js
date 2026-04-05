import mysql from "mysql2";

export const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // en Wamp normalmente va vacío
  database: "peliculas_db"
});

conexion.connect((err) => {
  if (err) {
    console.log("❌ Error de conexión:", err);
  } else {
    console.log("✅ Conectado a MySQL");
  }
});