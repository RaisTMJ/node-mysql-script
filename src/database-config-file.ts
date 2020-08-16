const TestDatabase: DatabaseConfig = {
    database: "database",
    host: "host",
    password: "password",
    userName: "user"
}

interface DatabaseConfig {
    userName: string,
    password: string,
    host: string,
    database: string
}

export const databaseConfig = TestDatabase; //todo
