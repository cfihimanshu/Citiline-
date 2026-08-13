import mysql from "mysql2/promise";

const requiredVariables = [
    "MYSQL_HOST",
    "MYSQL_USER",
    "MYSQL_PASSWORD",
    "MYSQL_DATABASE",
] as const;

for (const variable of requiredVariables) {
    if (!process.env[variable]) throw new Error(`${variable} is not configured.`);
}

const globalForMySql = globalThis as typeof globalThis & {
    citilineMySqlPool?: mysql.Pool;
};

export const db = globalForMySql.citilineMySqlPool ?? mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
    timezone: "Z",
});

if (process.env.NODE_ENV !== "production") globalForMySql.citilineMySqlPool = db;
