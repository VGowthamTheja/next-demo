import mysql from "mysql2";
import { NextRequest, NextResponse } from "next/server";

const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "root",
  database: "ORGZ",
});

const getData = (req: NextRequest) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM tasks", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  }).then((results) => {
    return NextResponse.json(results);
  });
};

export { getData as GET };
