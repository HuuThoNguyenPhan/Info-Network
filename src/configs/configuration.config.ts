export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
}

export const database_config = () => ({
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        urername: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        dbname: process.env.DATABASE_NAME
    },
});