import mysql from "mysql2";
import { NextRequest, NextResponse } from "next/server";

const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "root",
  database: "ORGZ",
});

async function handler(req: NextRequest) {
  const body = await req.json();

  const sql = `INSERT INTO tasks SET ?`;

  const nowDate = new Date().toISOString().slice(0, 19).replace("T", " ");

  return new Promise((resolve, reject) => {
    connection.query(
      sql,
      { ...body, completed: 0, created: nowDate, updated: nowDate },
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  }).then((results) => {
    return NextResponse.json(results);
  });
}

export { handler as POST };
